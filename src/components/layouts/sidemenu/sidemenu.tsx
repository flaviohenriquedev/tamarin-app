'use client'

import {RouteType} from "@/types/_root/RouteType";
import {SidemenuItem} from "@/components/layouts/sidemenu/sidemenu-item";

type Props = {
    rotas: RouteType[]
}

export function Sidemenu({rotas}: Props) {

    const renderRotas = () => {
        return rotas.map(rota => {
            return (
                <SidemenuItem key={rota.title} rota={rota}/>
            )
        })
    }

    return (
        <ul
            className={`
                        
                        scrollbar-none
                        overflow-y-scroll
                        overflow-x-hidden
                        h-full
                        pb-20
            `}
        >
            {renderRotas()}
        </ul>
    )
}