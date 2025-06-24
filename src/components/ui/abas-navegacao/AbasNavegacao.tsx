'use client'

import {usePathname, useRouter} from "next/navigation";
import {RouteType} from "@/types/_root/RouteType";
import {useSistemaContext} from "@/features/sistema/sistema-context";
import {useEffect, useState} from "react";
import {getModuloInfos, getRotasPorSistema} from "@/features/sistema/functions";
import {ModuloENUM} from "@/enums/ModuloEnum";

type Props = {
    modulo: ModuloENUM
}

export function AbasNavegacao({modulo}: Props) {
    const route = useRouter();
    const pathName = usePathname();
    const {sistemaSelecionado} = useSistemaContext();
    const [moduloInfo, setModuloInfo] = useState<RouteType>()

    useEffect(() => {
        if (sistemaSelecionado) {
            const moduloEncontrado = getModuloInfos(getRotasPorSistema(sistemaSelecionado), modulo)
            setModuloInfo(moduloEncontrado)
        }
    }, [modulo, sistemaSelecionado]);


    const onClickTab = (href: string) => {
        route.push(href);
    }
    return (
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
                        onClick={() => onClickTab(aba.href)}
                        className={`${pathName === aba.href ? 'border-primary text-primary' : 'border-transparent'} cursor-pointer py-1 border-b-2 text-sm`}>
                        {aba.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}