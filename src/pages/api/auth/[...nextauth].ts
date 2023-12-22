import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/libs/db"
import GithubProvider from "next-auth/providers/github"

const { GITHUB_ID, GITHUB_SECRET } = process.env

if (!GITHUB_ID || !GITHUB_SECRET) {
    throw new Error("GITHUB_ID and GITHUB_SECRET must be set")
}

export const authConfig: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET,
        }),
    ],
    adapter: PrismaAdapter(prisma),
}


export default NextAuth(authConfig)