// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      accessToken?: string; // Add accessToken
      refreshToken?: string; // Add refreshToken if needed
    } & DefaultSession["user"];
  }
}
