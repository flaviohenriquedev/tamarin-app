'use client'

import React from "react";
import {rotasDepartamentoPessoal} from "@/features/departamento-pessoal/rotas-departamento-pessoal";
import {RouteType} from "@/types/_root/RouteType";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {Feather} from "lucide-react";
import {Inter, Roboto} from "next/font/google";

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
              p-2
              text-neutral-500
              bg-gradient-to-br from-blue-200 via-violet-100 to-white
              ${font.className}
            `}>

            <aside
                className={`flex min-w-72 w-fit gap-2 arcano-container backdrop-blur-sm border border-white`}>
                <div className={`h-full w-full`}>
                    <div className={`flex items-center gap-3 text-neutral-900 text-center p-4 text-2xl font-semibold`}>
                        <Feather size={25}/>
                        <label>Arcano</label>
                    </div>
                    <ul className="flex flex-col mt-10 gap-2">
                        {rotas.map((rota) => (
                            <li
                                key={rota.id}
                                className="group rounded-lg h-10 flex items-center transition-all duration-200"
                            >
                                {/* barrinha que empurra */}
                                <div className="h-full w-0 group-hover:w-2 bg-indigo-500 rounded-r-lg transition-all duration-200"></div>

                                {/* conteúdo que será empurrado */}
                                <div className="flex items-center gap-5 ml-4 transition-all duration-200 group-hover:ml-4 group-hover:text-indigo-500">
                                    <span>{rota.icon}</span>
                                    <label className="text-md">{rota.title}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <div className={`flex flex-col gap-2 w-full`}>
                <header className={`flex w-full h-fit`}>
                    <div className={`arcano-container px-4 text-neutral-600 text-lg py-2 flex items-center w-fit h-14 ${fontNomeSistema.className}`}>
                        <span>Recursos Humanos</span>
                    </div>

                    <div className={`bg-white rounded-full shadow-md ml-auto px-4 py-2 flex items-center w-14 h-14`}>

                    </div>
                </header>

                <div className={`arcano-container  px-4 py-2 w-full h-full`}>
                    content
                </div>
            </div>
        </main>
    )
}