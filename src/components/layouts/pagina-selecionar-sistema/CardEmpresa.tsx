import {motion} from "framer-motion";
import React from "react";
import {DadosAcesso} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

type Props = {
    dadosAcesso: DadosAcesso;
    destacar: boolean;
    selecionarDadosAcesso: (dadosAcesso: DadosAcesso) => void;
}

export function CardEmpresa({dadosAcesso, destacar, selecionarDadosAcesso}: Props) {

    return (
        <>
            {dadosAcesso && (
                <motion.li
                    onClick={() => selecionarDadosAcesso(dadosAcesso)}
                    initial={{opacity: 0, scale: 0.9, filter: 'blur(10px)'}}
                    animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
                    transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1
                    }}
                    whileHover={{scale: 1.05}}
                    className={`
                                    bg-base-100
                                    text-md
                                    border-2
                                    ${destacar ? 'border-blue-400' : 'border-transparent'}
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
                    <span>{dadosAcesso.empresa.nomeFantasia}</span>
                </motion.li>
            )}
        </>
    )
}