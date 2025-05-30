'use client'

import {useAuthRedirect} from "@/hooks/useAuthRedirect";
import {Loading} from "@/components/layouts/loading/loading";
import {ReactNode} from "react";

export default function LayoutAuth({children}: {children: ReactNode}) {
    const status = useAuthRedirect({redirectIfAuthenticated: true, redirectTo: "/"}); // Protege contra não autenticado

    if (status === "loading") return <Loading />;
    if (status === "authenticated") return null;

    return (<>{children}</>)
}