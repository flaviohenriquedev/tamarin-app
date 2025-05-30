'use client'

import {ReactNode} from "react";
import {SideMenuContextProvider} from "@/context/sidemenu-context";
import {SessionProvider} from "next-auth/react";
import {ThemeProvider} from "next-themes";
import {ClienteContextProvider} from "@/context/cliente-context";
import {UsuarioProvider} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider>
                <ClienteContextProvider>
                    <UsuarioProvider>
                        <SideMenuContextProvider>
                            {children}
                        </SideMenuContextProvider>
                    </UsuarioProvider>
                </ClienteContextProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}
