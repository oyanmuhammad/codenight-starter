import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { multiSession } from "better-auth/plugins/multi-session";
import { prisma } from "./prisma";

// Better Auth configuration with Prisma adapter
export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins:
    process.env.NODE_ENV === "development"
      ? (request?: Request) => [request?.headers.get("origin") ?? "*"]
      : [process.env.BETTER_AUTH_URL!, process.env.NEXT_PUBLIC_APP_URL!],
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  // Email & password authentication using Better Auth
  emailAndPassword: {
    enabled: true,
  },
  // Session management with cookie cache
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },
  plugins: [nextCookies(), multiSession()],
  advanced: {
    // Only send cookies over HTTPS in production
    useSecureCookies: process.env.NODE_ENV === "production",
  },
});

export type Session = typeof auth.$Infer.Session;
