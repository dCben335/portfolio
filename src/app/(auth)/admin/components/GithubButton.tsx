"use client"

import Button from "@/components/ui/Button/Button";
import { signIn } from "next-auth/react";

export default function GithubButton() {
    const handleClick = () => { 
        signIn("github", { 
            callbackUrl: "/dashboard" 
        })
    }


    return (
        <Button clicked={() => handleClick()}>
            Connexion avec Github
        </Button>
    )
}