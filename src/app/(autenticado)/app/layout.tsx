import {LayoutInicial} from "@/components/layouts/layout-inicial/layout-inicial";
import {ReactNode} from "react";

export default function AppLayout({children}: { children: ReactNode }) {
    return (
        <LayoutInicial>
            {children}
        </LayoutInicial>
    )
}