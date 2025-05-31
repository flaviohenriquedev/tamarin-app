'use client'

import {ReactNode} from "react";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";
import ProvidersAuthenticated from "@/providers/providers-authenticated";

export default function InitLayout({children}: { children: ReactNode }) {

    const status = useAuthRedirect();

    if (status === "loading") return <></>;
    if (status === "unauthenticated") return null;

    return (
        <main className={`p-2`}>
            <ProvidersAuthenticated>
                {children}
            </ProvidersAuthenticated>
        </main>
    )
}