import { getServerSession } from "next-auth";
import { authConfig } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function useAdmin() {
    const session = await getServerSession(authConfig)

    console.log("session")
    console.log("session")
    if (!session) {
        console.log("wow")
        // redirect("/api/auth/signin")
    }

    console.log("test")

    return session
}