import {motion} from "framer-motion";
import React from "react";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";

type Props = {
    cliente: Empresa;
    destacar: boolean;
    listarSistemas: (cliente: Empresa) => void;
}

export function CardCliente({cliente, destacar, listarSistemas}: Props) {

    return (
        <>
            {cliente && (
                <motion.li
                    onClick={() => listarSistemas(cliente)}
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
                    <span>{cliente.nomeFantasia}</span>
                </motion.li>
            )}
        </>
    )
}