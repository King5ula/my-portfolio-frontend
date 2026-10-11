import { describe, expect, it } from "vitest";
import { MISSIONS } from "@/lib/missions";

describe("MISSIONS", () => {
  it("links every mission to its own GitHub repo", () => {
    const urls = MISSIONS.map((mission) => mission.repoUrl);

    for (const url of urls) {
      expect(url).toMatch(/^https:\/\/github\.com\/King5ula\/[\w.-]+$/);
    }
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("gives every mission highlights and tags to show", () => {
    for (const mission of MISSIONS) {
      expect(mission.highlights.length).toBeGreaterThan(0);
      expect(mission.tags.length).toBeGreaterThan(0);
    }
  });
});
