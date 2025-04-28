'use client'

import {RouteType} from "@/types/RouteType";
import {useContext} from "react";
import {SideMenuContext} from "@/context/sidemenu-context";
import {SidemenuItem} from "@/components/layouts/sidemenu/sidemenu-item";

type Props = {
    expanded?: boolean;
    rotas: RouteType[]
}

export function Sidemenu({expanded = true, rotas}: Props) {

    const {cliente} = useContext(SideMenuContext);

    const renderRotas = () => {
        return rotas.map(rota => {
            return (
                <SidemenuItem key={rota.title} rota={rota} />
            )
        })
    }

    return (
        <aside className={`sidemenu flex flex-col gap-10 h-screen w-[25rem] min-w-[20rem] px-2 ${expanded ? 'block' : 'hidden'} border-r border-base-200`}>
            <div className={`flex items-center justify-center max-h-20 min-h-20 font-bold`}>
                {cliente}
            </div>
            <ul className={`
            scrollbar-thumb-base-300
            scrollbar-track-transparent
            scrollbar-thin
            overflow-y-scroll 
            h-full 
            pb-20`}>
                {renderRotas()}
            </ul>
        </aside>
    )
}