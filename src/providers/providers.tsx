'use client'

import {ReactNode} from "react";
import {SideMenuContextProvider} from "@/context/sidemenu-context";
import {SessionProvider} from "next-auth/react";
import {ThemeProvider} from "next-themes";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider>
                <SideMenuContextProvider>
                    {children}
                </SideMenuContextProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}
