'use client'

import {ReactNode} from "react";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";
import {Loading} from "@/components/layouts/loading/loading";

export default function LayoutLogin({children}: { children: ReactNode }) {
    const status = useAuthRedirect({ redirectIfAuthenticated: true, redirectTo: "/init" });

    if (status === "loading") return <Loading />;
    if (status === "authenticated") return null;

    return <>{children}</>
}