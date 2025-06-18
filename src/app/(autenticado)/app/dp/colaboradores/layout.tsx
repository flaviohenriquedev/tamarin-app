'use client'

import {ReactNode, useState} from "react";
import {useRouter} from "next/navigation";

const valores = [
    {
        label: 'Colaboradores',
        href: '/app/dp/colaboradores'
    },
    {
        label: 'Admissão',
        href: '/app/dp/colaboradores/admissao',
    }
]

export default function LayoutColaboradores({children}: { children: ReactNode }) {
    const [idxAtivo, setIdxAtivo] = useState<number>(0)
    const route = useRouter()

    const onClickTab = (index: number, href: string) => {
        route.push(href);
        setIdxAtivo(index)
    }

    return (
        <>
            <div className={`
                        flex
                        items-center
                        p-2
                        bg-base-100
                        shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]
                        rounded-lg
                        backdrop-blur-sm`}>
                <ul className={`flex items-center h-full gap-4 px-2 py-1`}>
                    {valores.map((valor, index) => (
                        <li key={index}
                            onClick={() => onClickTab(index, valor.href)}
                            className={`${index === idxAtivo ? 'border-primary text-primary' : 'border-transparent'} cursor-pointer py-1 border-b-2 text-sm`}>
                            {valor.label}
                        </li>
                    ))}
                </ul>
            </div>
            {children}
        </>
    )
}