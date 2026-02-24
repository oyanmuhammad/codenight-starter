// Client-side auth client for React components
// No baseURL needed — client automatically uses window.location.origin,
// which works correctly across localhost, local IP, and production domains.
import { createAuthClient } from "better-auth/react";
import { multiSessionClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [multiSessionClient()],
});
