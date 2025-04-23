'use client'

import {useContext} from "react";
import Link from "next/link";
import {SideMenuContext} from "@/context/sidemenu-context";
import {ModuloType} from "@/features/sistema/rotas";

type Props = {
    modulo: ModuloType
}

export function CardModulo({modulo}: Props) {

    const {setRotas} = useContext(SideMenuContext);

    function handleNavigate() {
        console.log(modulo);
        console.log(modulo.rotas);
        setRotas(modulo.rotas);
    }

    return (
        <div className={`flex flex-col w-72 h-72 ${modulo.destaque ? 'bg-[#B8520A]' : 'bg-[#1A1A1A]'} text-white rounded-lg p-5 gap-4`}>
            <div>{modulo.icone}</div>
            <div className="text-[20pt] font-bold leading-tight">
                {modulo.titulo}
            </div>

            <div className={`font-light text-sm`}>{modulo.descricao}</div>
            <Link prefetch={true}
                  className="w-fit mt-auto ml-auto text-sm"
                  href={modulo.href}
                  onClick={handleNavigate}>Acessar</Link>
        </div>
    )
}