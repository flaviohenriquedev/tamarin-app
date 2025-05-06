"use client";

import React, {createContext, useState} from "react";
import {TRoute} from "@/types/_root/TRoute";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

type SidemenuContextProps = {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
    sideMenuEntered: boolean;
    setSideMenuEntered: (value: boolean) => void;
    rotas: TRoute[];
    setRotas: (rotas: TRoute[]) => void;
    cliente: TSelectItem;
    setCliente: (value: TSelectItem) => void;
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
    cliente: {value: '', label: ''},
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
    const [rotas, setRotas] = useState<TRoute[]>([])
    const [cliente, setCliente] = useState<TSelectItem>({value: '', label: ''})

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
