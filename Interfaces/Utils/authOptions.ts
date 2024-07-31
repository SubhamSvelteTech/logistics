import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
          name: 'credentials',
          credentials: {},
          async authorize(credentials) {
            const { email, password } = credentials as {
              email: string;
              password: string;
            };
            if (email !== 'john@gmail.com' || password !== '1234') {
              throw new Error('Invalid credentials');
            } else {
              const user = {
                id: '1234',
                name: 'John Doe',
                email: 'john@gmail.com',
                role: 'admin',
              };
              return user;
            }
          },
        }),
      ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };