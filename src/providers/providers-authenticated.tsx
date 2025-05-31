'use client'

import {ReactNode} from "react";
import {SideMenuContextProvider} from "@/context/sidemenu-context";
import {ClienteContextProvider} from "@/context/cliente-context";
import {UsuarioProvider} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";

export default function ProvidersAuthenticated({children}: { children: ReactNode }) {
    return (
        <ClienteContextProvider>
            <UsuarioProvider>
                <SideMenuContextProvider>
                    {children}
                </SideMenuContextProvider>
            </UsuarioProvider>
        </ClienteContextProvider>
    )
}
