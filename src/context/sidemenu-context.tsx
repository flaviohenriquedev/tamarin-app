"use client";

import React, {createContext, useState} from "react";
import {RouteType} from "@/types/_root/RouteType";

type SidemenuContextProps = {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
    sideMenuEntered: boolean;
    setSideMenuEntered: (value: boolean) => void;
    rotas: RouteType[];
    setRotas: (rotas: RouteType[]) => void;
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
});

export const SideMenuContextProvider = ({
                                            children,
                                        }: {
    children: React.ReactNode;
}) => {
    const [expanded, setExpanded] = useState(false);
    const [sideMenuEntered, setSideMenuEntered] = useState<boolean>(false);
    const [rotas, setRotas] = useState<RouteType[]>([])

    return (
        <SideMenuContext.Provider
            value={{
                expanded,
                setExpanded,
                sideMenuEntered,
                setSideMenuEntered,
                rotas,
                setRotas,
            }}
        >
            {children}
        </SideMenuContext.Provider>
    );
};
