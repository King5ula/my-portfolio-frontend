import { defineConfig } from "vitest/config";
import path from "path";

// Mirrors tsconfig.json's "@/*" path alias so test files can import the
// same way app code does.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
