import { createRouteHandler } from "uploadthing/next";
import { uploadRouter } from "@/lib/uploadthing";

// Route handler for UploadThing API routes
export const { GET, POST } = createRouteHandler({
  router: uploadRouter,
});
