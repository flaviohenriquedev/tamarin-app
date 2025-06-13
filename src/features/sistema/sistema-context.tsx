'use client'

import {createContext, ReactNode, useContext, useState} from "react";
import {SistemaType} from "@/features/sistema/types";
import {useRouter} from "next/navigation";
import {sistemasModulos} from "@/features/sistema/sistemasModulos";

type Props = {
    listaSistemas: SistemaType[],
    selecionarSistema: (sistema: SistemaType, redirect?: boolean) => void,
    sistemaSelecionado: SistemaType | undefined,
}

const SistemaContext = createContext<Props>({
    listaSistemas: [],
    selecionarSistema: () => {
    },
    sistemaSelecionado: undefined
});

export function useSistemaContext() {
    return useContext(SistemaContext);
}

type Options = {
    children: ReactNode;
}

export function SistemaContextProvider({children}: Options) {
    const route = useRouter();
    const [listaSistemas, setListaSistemas] = useState<SistemaType[]>([]);
    const [sistemaSelecionado, setSistemaSelecionado] = useState<SistemaType>()

    function selecionarSistema(sistema: SistemaType, redirectOnSelect = false) {

        const sistemaSelecionadoStorage = localStorage.getItem("sistemaSelecionado");
        if (sistemaSelecionadoStorage) {
            setSistemaSelecionado(sistemasModulos.find(sm => sm.sistema === sistemaSelecionadoStorage));
            return;
        }

        setSistemaSelecionado(sistema);
        localStorage.setItem("sistemaSelecionado", sistema.sistema);
        if (redirectOnSelect) {
            route.push(sistema.href);
        }
    }

    return (
        <SistemaContext.Provider value={{
            listaSistemas,
            selecionarSistema,
            sistemaSelecionado
        }}>
            {children}
        </SistemaContext.Provider>
    )
}