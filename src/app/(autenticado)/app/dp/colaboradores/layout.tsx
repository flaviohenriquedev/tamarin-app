'use client'

import {ReactNode, useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {useSistemaContext} from "@/features/sistema/sistema-context";
import {RouteType} from "@/types/_root/RouteType";
import {getModuloInfos, getRotasPorSistema} from "@/features/sistema/functions";
import {ModuloENUM} from "@/enums/ModuloEnum";

export default function LayoutColaboradores({children}: { children: ReactNode }) {
    const pathName = usePathname();

    const {sistemaSelecionado} = useSistemaContext();
    const route = useRouter()

    const [moduloInfo, setModuloInfo] = useState<RouteType>()

    const onClickTab = (index: number, href: string) => {
        route.push(href);
    }

    useEffect(() => {
        if (sistemaSelecionado) {
            const moduloEncontrado = getModuloInfos(getRotasPorSistema(sistemaSelecionado), ModuloENUM.GESTAO_COLABORADORES)
            setModuloInfo(moduloEncontrado)
        }
    }, [sistemaSelecionado]);

    return (
        <>
            <div className={`
                        flex
                        items-center
                        p-2
                        bg-base-100
                        shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]
                        rounded-lg
                        backdrop-blur-sm`}>
                <ul className={`flex items-center h-full gap-4 px-2 py-1`}>
                    {moduloInfo?.abas && moduloInfo.abas.map((aba, index) => (
                        <li key={index}
                            onClick={() => onClickTab(index, aba.href)}
                            className={`${pathName === aba.href ? 'border-primary text-primary' : 'border-transparent'} cursor-pointer py-1 border-b-2 text-sm`}>
                            {aba.title}
                        </li>
                    ))}
                </ul>
            </div>
            {children}
        </>
    )
}