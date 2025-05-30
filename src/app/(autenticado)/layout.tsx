'use client'

import {ReactNode} from "react";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";

export default function InitLayout({children}: { children: ReactNode }) {

    const status = useAuthRedirect();

    if (status === "loading") return <></>;
    if (status === "unauthenticated") return null;

    return (
        <main className={`p-2`}>{children}</main>
    )
}