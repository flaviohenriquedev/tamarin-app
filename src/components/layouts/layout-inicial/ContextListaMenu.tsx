'use client'

import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

type Props = {
    sideBarExpandido: boolean;
    setSideBarExpandido: Dispatch<SetStateAction<boolean>>;
    submenusVisiveis: Record<string, boolean>;
    setSubmenusVisiveis: (map: Record<string, boolean>) => void;
}

export const ContextListaMenu = createContext<Props>({
    sideBarExpandido: false,
    setSideBarExpandido: () => {
    },
    submenusVisiveis: {},
    setSubmenusVisiveis: () => {},
})

export function ContextListaMenuProvider({children}: {children: ReactNode}) {

    const [sideBarExpandido, setSideBarExpandido] = useState<boolean>(true)
    const [submenusVisiveis, setSubmenusVisiveis] = useState<Record<string, boolean>>({});


    return (
        <ContextListaMenu.Provider value={{
            sideBarExpandido,
            setSideBarExpandido,
            submenusVisiveis,
            setSubmenusVisiveis
        }}>
            {children}
        </ContextListaMenu.Provider>
    )
}