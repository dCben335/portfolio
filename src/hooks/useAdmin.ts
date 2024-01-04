import { authConfig } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function useAdmin() {
    const session = await getServerSession(authConfig)

    if (!session) {
        console.log("wow")
        // redirect("/api/auth/signin")
    }

    console.log("test")

    return session
}