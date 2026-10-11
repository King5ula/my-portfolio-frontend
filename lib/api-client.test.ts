import { afterEach, describe, expect, it, vi } from "vitest";
import { ApiError, sendChatMessage, sendContactMessage } from "@/lib/api-client";

function stubFetch(status: number, body: unknown) {
  const fetchMock = vi.fn().mockResolvedValue(
    new Response(JSON.stringify(body), { status }),
  );
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

afterEach(() => vi.unstubAllGlobals());

describe("sendChatMessage", () => {
  it("posts the message and returns the reply", async () => {
    const fetchMock = stubFetch(200, { reply: "Kia ora" });

    await expect(sendChatMessage("hello")).resolves.toBe("Kia ora");

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("http://localhost:8000/api/chat");
    expect(init.method).toBe("POST");
    expect(JSON.parse(init.body)).toEqual({ userMessage: "hello" });
  });

  it("throws the backend's error message", async () => {
    stubFetch(429, { error: "Too many requests" });

    const failure = sendChatMessage("hello");

    await expect(failure).rejects.toBeInstanceOf(ApiError);
    await expect(failure).rejects.toThrow("Too many requests");
  });

  it("falls back to a generic message for an unexpected body", async () => {
    stubFetch(500, { detail: "boom" });
    await expect(sendChatMessage("hello")).rejects.toThrow("Connection error");

    stubFetch(200, { answer: "wrong shape" });
    await expect(sendChatMessage("hello")).rejects.toThrow("Connection error");
  });

  it("lets a network failure through as a non-ApiError", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));

    await expect(sendChatMessage("hello")).rejects.not.toBeInstanceOf(ApiError);
  });
});

describe("sendContactMessage", () => {
  const contact = { name: "Ada", email: "ada@example.com", message: "Hello" };

  it("posts the form and returns the success message", async () => {
    const fetchMock = stubFetch(200, { success: "Delivered" });

    await expect(sendContactMessage(contact)).resolves.toBe("Delivered");

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("http://localhost:8000/api/contact");
    expect(JSON.parse(init.body)).toEqual(contact);
  });

  it("throws the backend's validation message", async () => {
    stubFetch(400, { error: "Please enter a valid email address." });

    await expect(sendContactMessage(contact)).rejects.toThrow("valid email address");
  });
});
