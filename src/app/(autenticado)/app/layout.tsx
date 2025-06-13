import {LayoutInicial} from "@/components/layouts/layout-inicial/LayoutInicial";
import {ReactNode} from "react";
import {ContextListaMenuProvider} from "@/components/layouts/layout-inicial/context-lista-menu";

export default function AppLayout({children}: { children: ReactNode }) {
    return (
        <ContextListaMenuProvider>
            <LayoutInicial>
                {children}
            </LayoutInicial>
        </ContextListaMenuProvider>
    )
}