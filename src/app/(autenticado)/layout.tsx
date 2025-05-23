'use client'

import {ReactNode} from "react";
import {useAuthRedirect} from "@/hooks/useAuthRedirect";
import {Loading} from "@/components/layouts/loading/loading";
import {LayoutInicial} from "@/components/layouts/layout-inicial/layout-inicial";
import {UsuarioProvider} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";

export default function InitLayout({children}: { children: ReactNode }) {

    const status = useAuthRedirect(); // Protege contra não autenticado

    if (status === "loading") return <Loading/>;
    if (status === "unauthenticated") return null;

    return (
        <UsuarioProvider>
            <LayoutInicial>
                {children}
            </LayoutInicial>
        </UsuarioProvider>
    )
}