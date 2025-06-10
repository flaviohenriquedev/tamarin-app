'use client'

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {SistemaType} from "@/features/sistema/types";
import {dadosSistemas} from "@/features/sistema/useDadosSistemas";
import {useRouter} from "next/navigation";

type Props = {
    listaSistemasUsuarioLogado: SistemaType[],
    listaSistemas: SistemaType[],
    selecionarSistema: (sistema: SistemaType, redirect?: boolean) => void,
    sistemaSelecionado: SistemaType | undefined
}

const SistemaContext = createContext<Props>({
    listaSistemasUsuarioLogado: [],
    listaSistemas: [],
    selecionarSistema: () => {},
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
    const [listaSistemasUsuarioLogado, setListaSistemasUsuarioLogado] = useState<SistemaType[]>([]);

    const [sistemaSelecionado, setSistemaSelecionado] = useState<SistemaType>()

    useEffect(() => {
        setListaSistemas(dadosSistemas);
    }, []);

    function selecionarSistema(sistema: SistemaType, redirectOnSelect = false) {
        setSistemaSelecionado(sistema);
        localStorage.setItem("sistemaSelecionado", sistema.sistema);
        if (redirectOnSelect) {
            console.log("Redirecionando para:", sistema.href);
            route.push(sistema.href);
        }
    }

    return (
        <SistemaContext.Provider value={{
            listaSistemasUsuarioLogado,
            listaSistemas,
            selecionarSistema,
            sistemaSelecionado
        }}>
            {children}
        </SistemaContext.Provider>
    )
}