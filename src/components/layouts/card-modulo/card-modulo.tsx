import {ReactNode} from "react";
import Link from "next/link";

type Props = {
    icone: ReactNode,
    titulo: string,
    descricao: string,
    rota: string,
    destaque?: boolean,
}

export function CardModulo({icone, titulo, descricao, rota, destaque = false}: Props) {

    return (
        <div className={`flex flex-col w-72 h-72 ${destaque ? 'bg-[#B8520A]' : 'bg-[#1A1A1A]'} text-white rounded-lg p-5 gap-4`}>
            <div>{icone}</div>
            <div className="text-[20pt] font-bold leading-tight">
                {titulo}
            </div>

            <div className={`font-light text-sm`}>{descricao}</div>
            <Link prefetch={true} className="w-fit mt-auto ml-auto text-sm" href={rota}>Acessar</Link>
        </div>
    )
}