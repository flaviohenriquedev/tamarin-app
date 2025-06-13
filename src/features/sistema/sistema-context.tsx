'use client'

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {SistemaType} from "@/features/sistema/types";
import {useRouter} from "next/navigation";
import {sistemasModulos} from "@/features/sistema/sistemasModulos";

type Props = {
    listaSistemas: SistemaType[];
    selecionarSistema: (sistema: SistemaType, redirect?: boolean) => void;
    sistemaSelecionado: SistemaType | undefined;
    limparSistemaSelecionado: () => void;
}

const SistemaContext = createContext<Props>({
    listaSistemas: [],
    selecionarSistema: () => {
    },
    sistemaSelecionado: undefined,
    limparSistemaSelecionado: () => {
    }
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

    useEffect(() => {
        const sistemaSelecionadoStorage = localStorage.getItem("sistemaSelecionado");
        if (sistemaSelecionadoStorage) {
            setSistemaSelecionado(sistemasModulos.find(sm => sm.sistema === sistemaSelecionadoStorage));
            return;
        }
    }, [])

    function selecionarSistema(sistema: SistemaType, redirectOnSelect = false) {
        setSistemaSelecionado(sistema);
        localStorage.setItem("sistemaSelecionado", sistema.sistema);
        if (redirectOnSelect) {
            route.push(sistema.href);
        }
    }

    function limparSistemaSelecionado() {
        localStorage.removeItem("sistemaSelecionado");
        setSistemaSelecionado(undefined);
    }

    return (
        <SistemaContext.Provider value={{
            listaSistemas,
            selecionarSistema,
            sistemaSelecionado,
            limparSistemaSelecionado
        }}>
            {children}
        </SistemaContext.Provider>
    )
}