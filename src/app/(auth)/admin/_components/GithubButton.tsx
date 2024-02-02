"use client"

import Button from "@/components/ui/Button/Button";
import { signIn } from "next-auth/react";
import GitHub from "@/components/Icons/Socials/GitHub/GitHub";

export default function GithubButton() {
    
    const handleClick = () => { 
        signIn("github", { 
            callbackUrl: "/dashboard" 
        })
    }


    return (
        <Button onClick={() => handleClick()}>
            <GitHub />
        </Button>
    )
}