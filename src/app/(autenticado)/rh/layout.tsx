'use client'

import {Header} from "@/components/layouts/header/header";
import {ReactNode} from "react";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {Sidemenu} from "@/components/layouts/sidemenu/sidemenu";

export default function LayoutModuloRecursosHumanos({children}: { children: ReactNode }) {
    return (
        <main className={`flex`}>
            <Sidemenu rotas={rotasRecursosHumanos} />
            <div className={`flex flex-col w-full h-screen items-center gap-10`}>
                <Header/>
                {children}
            </div>
        </main>
    )
}