'use client'

import React from "react";
import {rotasDepartamentoPessoal} from "@/features/departamento-pessoal/rotasDepartamentoPessoal";
import {RouteType} from "@/types/_root/RouteType";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {Feather} from "lucide-react";
import {Inter, Roboto} from "next/font/google";
import {ListaMenu} from "@/app/(desenvolvimento)/dev/pagina-inicial/lista-menu";

const font = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'], // ou outros pesos que tu for usar
});

const fontNomeSistema = Inter({
    subsets: ['latin'],
    weight: ['400', '700'], // ou outros pesos que tu for usar
});

export default function PaginaInicialDev() {

    const rotas: RouteType[] = [...rotasDepartamentoPessoal, ...rotasRecursosHumanos];
    
    return (
        <main className={`
                relative
                flex
                w-screen
                h-screen
                gap-2
                p-4
                text-neutral-800
                bg-gradient-to-br
                from-white
                via-primary to-violet-200
                overflow-hidden
                backdrop-blur-2xln
              ${font.className}
            `}>
            <aside
                className={`flex min-w-72 w-fit gap-2 arcano-container backdrop-blur-sm border border-white`}>
                <div className={`h-full w-full`}>
                    <div className={`flex items-center gap-3 text-neutral-900 text-center p-4 text-2xl font-semibold`}>
                        <Feather size={25}/>
                        <label>Arcano</label>
                    </div>
                    {rotas && <ListaMenu rotas={rotas}/>}
                </div>
            </aside>

            <div className={`flex flex-col gap-2 w-full`}>
                <header className={`flex w-full h-fit`}>
                    <div
                        className={`arcano-container px-4 text-neutral-600 text-lg py-2 flex items-center w-fit h-14 ${fontNomeSistema.className}`}>
                        <span>Recursos Humanos</span>
                    </div>
                </header>

                <div className={`arcano-container  px-4 py-2 w-full h-full`}>
                    content
                </div>
            </div>
        </main>
    )
}