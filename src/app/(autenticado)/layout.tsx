'use client'

import {ReactNode} from "react";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";

export default function InitLayout({children}: { children: ReactNode }) {

    const status = useAuthRedirect();

    if (status === "unauthenticated") return null;

    console.log('Dentro do InitLayout', status);

    return (<>{children}</>)
}