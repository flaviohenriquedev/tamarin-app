import {motion} from "framer-motion";
import React from "react";
import {SistemaType} from "@/features/sistema/types";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {useSistemaContext} from "@/features/sistema/sistema-context";

type Props = {
    sistema: SistemaType;
}

export function CardSistema({sistema}: Props) {
    const { selecionarSistema } = useSistemaContext();

    return (
        <>
            {sistema && (
                <motion.li
                    onClick={() => selecionarSistema(sistema, true)}
                    initial={{opacity: 0, scale: 0.9, filter: 'blur(10px)'}}
                    animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
                    transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1
                    }}
                    whileHover={{scale: 1.05}}
                    className={`
                                    bg-white
                                    text-md
                                    flex
                                    items-center
                                    gap-4
                                    text-neutral-400
                                    w-full
                                    cursor-pointer
                                    font-normal
                                    p-4
                                    rounded-lg
                                    shadow-[-6px_8px_47px_-25px_rgba(0,_0,_0,_0.1)]
                                    transition-colors
                                    duration-200
                                    hover:text-blue-400
                                `}
                >
                    {sistema.icone}
                    <span>{SistemaENUMFactory.getDescricao(sistema.sistema)}</span>
                </motion.li>
            )}
        </>
    )
}