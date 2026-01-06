import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import type { User } from "next-auth";
import { findUserByUsername } from "@/app/services/user";
import bcrypt from "bcryptjs";
import { UserRole } from "@/app/types/model";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        const user = await findUserByUsername(credentials.username);
        if (!user) {
          return null;
        }
        // 🔹 SAMPLE USER (demo)
        const hashval = await bcrypt.hash("123456", 10);
        console.log("pass: " , user.password);
        console.log("hash: ",  hashval);
        const ok = await bcrypt.compare(credentials.password, user.password);
        console.log("ok result:", ok)
        if (!ok) return null;

        return {
          id: user.userId,
          name: user.userName,
          role: user.role
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = (user as any).role as UserRole;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
