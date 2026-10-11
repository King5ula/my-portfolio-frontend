import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { TECH_GROUPS, TECH_TABS, groupsForTab } from "@/lib/tech-stack";

describe("groupsForTab", () => {
  it("returns every group for the 'all' tab", () => {
    expect(groupsForTab("all")).toEqual(TECH_GROUPS);
  });

  it("returns only the matching group for a category tab", () => {
    const groups = groupsForTab("backend");

    expect(groups.map((group) => group.category)).toEqual(["backend"]);
    expect(groups[0].items.map((item) => item.name)).toContain("FastAPI");
  });
});

describe("tech stack data", () => {
  it("has an 'all' tab followed by one tab per group", () => {
    expect(TECH_TABS.map(({ tab }) => tab)).toEqual([
      "all",
      ...TECH_GROUPS.map((group) => group.category),
    ]);
  });

  it("has no duplicate item names within a group", () => {
    for (const group of TECH_GROUPS) {
      const names = group.items.map((item) => item.name);

      expect(new Set(names).size).toBe(names.length);
    }
  });

  it("points every icon at a file that exists in public/", () => {
    for (const item of TECH_GROUPS.flatMap((group) => group.items)) {
      if (item.icon) {
        expect(existsSync(path.join("public", item.icon)), item.icon).toBe(true);
      }
    }
  });
});
