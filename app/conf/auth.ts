import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  // TODO: Occasionally bug(https://github.com/nextauthjs/next-auth/discussions/3186)
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
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      }
    }
},
  secret: process.env.NEXTAUTH_SECRET as string,
};