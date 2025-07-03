'use client'

import {ReactNode} from "react";
import {SideMenuContextProvider} from "@/context/sidemenu-context";
import {EmpresaContextProvider} from "@/context/useEmpresa";
import {UsuarioProvider} from "@/features/manager/gestaoUsuario/usuario/context/usuarioLogadoContext";
import {SistemaContextProvider} from "@/features/sistema/sistema-context";

export default function ProvidersAuthenticated({children}: { children: ReactNode }) {
    return (
        <UsuarioProvider>
            <SistemaContextProvider>
                <EmpresaContextProvider>
                    <SideMenuContextProvider>
                        {children}
                    </SideMenuContextProvider>
                </EmpresaContextProvider>
            </SistemaContextProvider>
        </UsuarioProvider>
    )
}
