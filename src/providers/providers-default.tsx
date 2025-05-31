'use client'

import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import {ThemeProvider} from "next-themes";

export default function ProvidersDefault({children}: { children: ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}
