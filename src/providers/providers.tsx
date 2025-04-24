'use client'

import {ReactNode} from "react";
import {ThemeProvider} from 'next-themes'
import {SideMenuContextProvider} from "@/context/sidemenu-context";
import {SessionProvider} from "next-auth/react";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider enableSystem={false}>
                <SideMenuContextProvider>
                    {children}
                </SideMenuContextProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}
