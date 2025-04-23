import {ReactNode} from "react";
import {ThemeProvider} from 'next-themes'
import {SideMenuContextProvider} from "@/context/sidemenu-context";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <ThemeProvider enableSystem={false}>
            <SideMenuContextProvider>
                {children}
            </SideMenuContextProvider>
        </ThemeProvider>
    )
}
