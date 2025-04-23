"use client";

import React, {createContext, useState} from "react";
import {RouteType} from "@/types/RouteType";

type SidemenuContextProps = {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
    sideMenuEntered: boolean;
    setSideMenuEntered: (value: boolean) => void;
    rotas: RouteType[];
    setRotas: (rotas: RouteType[]) => void;
    cliente: string;
    setCliente: (nome: string) => void;
};

export const SideMenuContext = createContext<SidemenuContextProps>({
    expanded: false,
    setExpanded: () => {
    },
    sideMenuEntered: false,
    setSideMenuEntered: () => {
    },
    rotas: [],
    setRotas: () => {
    },
    cliente: '',
    setCliente: () => {
    },
});

export const SideMenuContextProvider = ({
                                            children,
                                        }: {
    children: React.ReactNode;
}) => {
    const [expanded, setExpanded] = useState(false);
    const [sideMenuEntered, setSideMenuEntered] = useState<boolean>(false);
    const [rotas, setRotas] = useState<RouteType[]>([])
    const [cliente, setCliente] = useState<string>('')

    return (
        <SideMenuContext.Provider
            value={{
                expanded,
                setExpanded,
                sideMenuEntered,
                setSideMenuEntered,
                rotas,
                setRotas,
                cliente,
                setCliente
            }}
        >
            {children}
        </SideMenuContext.Provider>
    );
};
