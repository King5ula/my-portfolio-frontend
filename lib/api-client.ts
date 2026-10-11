import type { z } from "zod";
import { BACKEND_URL } from "@/lib/config";
import {
  ApiErrorSchema,
  ChatResponseSchema,
  ContactResponseSchema,
  type ContactMessage,
} from "@/lib/schemas";

// The backend answered, but not with what was asked for (validation, rate
// limit, outage). `message` is safe to show the visitor. A fetch that never
// reaches the backend rejects with its own error instead.
export class ApiError extends Error {}

const FALLBACK_ERROR = "Connection error. Please try again.";

async function postJson<T>(path: string, body: unknown, schema: z.ZodType<T>): Promise<T> {
  const response = await fetch(`${BACKEND_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data: unknown = await response.json();

  if (!response.ok) {
    const parsed = ApiErrorSchema.safeParse(data);
    throw new ApiError(parsed.success ? parsed.data.error : FALLBACK_ERROR);
  }

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw new ApiError(FALLBACK_ERROR);
  }
  return parsed.data;
}

export async function sendChatMessage(userMessage: string): Promise<string> {
  return (await postJson("/api/chat", { userMessage }, ChatResponseSchema)).reply;
}

export async function sendContactMessage(contact: ContactMessage): Promise<string> {
  return (await postJson("/api/contact", contact, ContactResponseSchema)).success;
}
