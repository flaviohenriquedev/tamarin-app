'use client'

import {ReactNode} from "react";

export default function LayoutLogin({children}: { children: ReactNode }) {
    // const status = useAuthRedirect({ redirectIfAuthenticated: true, redirectTo: "/adm" });
    //
    // if (status === "loading") return <Loading />;
    // if (status === "authenticated") return null;

    return <>{children}</>
}