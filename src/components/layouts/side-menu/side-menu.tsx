'use client'

import {RouteType} from "@/types/RouteType";
import {useContext} from "react";
import {SideMenuContext} from "@/context/sidemenu-context";

type Props = {
    expanded?: boolean;
    rotas: RouteType[]
}

export function SideMenu({expanded = false, rotas}: Props) {

    const {cliente} = useContext(SideMenuContext);

    const renderRotas = () => {
        return rotas.map(rota => {
            return (
                <li className={`text-sm p-2 transition-all duration-100 hover:border-l-4 hover:border-orange-600`}
                    key={rota.title}>
                    <div className={`flex items-center gap-2 cursor-default`}>
                        {rota.icon && <rota.icon />}
                        {rota.title}
                    </div>
                </li>
            )
        })
    }

    return (
        <aside className={`flex flex-col gap-10 h-screen w-[18rem] px-2 ${expanded ? 'block' : 'hidden'} border-r border-[#363636]`}>
            <div className={`flex items-center justify-center max-h-20 min-h-20 font-bold`}>
                {cliente}
            </div>
            <ul>
                {renderRotas()}
            </ul>
        </aside>
    )
}