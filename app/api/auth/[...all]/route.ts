import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Route handler for authentication API routes
export const { GET, POST } = toNextJsHandler(auth);
