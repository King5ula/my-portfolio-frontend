import { z } from "zod";

// The backend's response contract (see my-portfolio-backend/app/schemas).
export const ChatResponseSchema = z.object({ reply: z.string() });
export const ContactResponseSchema = z.object({ success: z.string() });
export const ApiErrorSchema = z.object({ error: z.string() });

export type ChatResponse = z.infer<typeof ChatResponseSchema>;

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
