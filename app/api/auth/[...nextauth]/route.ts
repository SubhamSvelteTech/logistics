// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {},
//       async authorize(credentials, req) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         // perform you login logic
//         // find out user from db
//         debugger
//         if (email !== "john@gmail.com" || password !== "1234") {
//           throw new Error("invalid credentials");
//         }

//         // if everything is fine
//         return {
//           id: "1234",
//           name: "John Doe",
//           email: "john@gmail.com",
//           role: "admin",
//         };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/",
//     // error: '/auth/error',
//     // signOut: '/auth/signout'
//   },

// };

// export default NextAuth(authOptions);

// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/user";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

export const authOptions:any = {
    secret:process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

       async authorize(credentials) {
        const { email, password } = credentials as {
            email: string;
            password: string;
          };
          if (email !== "john@gmail.com" || password !== "1234") {
            throw new Error("invalid credentials");
          }else{
            let user = {
                id: "1234",
                name: "John Doe",
                email: "john@gmail.com",
                role: "admin",
              }

              // if everything is fine
            //   console.log(user,'gfgfgf')
              return user
          }
        
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  callbacks:{
    async jwt({token, user}:any){
        if(user){
            token.id = user.id,
            token.name = user.name,
            token.role = user.role
        }
        return token
    },
    async session({session,token}:any){
        return {
            ...session,
            user:{
                ...session?.user,
                id:token?.id,
                role:token?.role
            }
        }
    }
  }

};

// Use it in server contexts
export function auth(
    ...args:
      | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
      | [NextApiRequest, NextApiResponse]
      | []
  ) {
    return getServerSession(...args, authOptions)
  }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
