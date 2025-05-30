import React from "react";
import {RouteType} from "@/types/_root/RouteType";
import {AnimatePresence, motion} from "framer-motion";
import {Dot} from "lucide-react";

type Props = {
    rotas: RouteType[];
    expandido?: boolean
}

export function ListaMenu({rotas, expandido = true}: Props) {
    return (
        <ul className="flex flex-col gap-2 border-t border-neutral-200 pt-2">
            {rotas.map((rota) => (
                <li key={rota.id}>
                    <div className={`flex items-center rounded-lg h-10 transition-all duration-200`}>
                        {/* barrinha que empurra */}
                        <div
                            className="flex items-center w-full justify-between gap-5 ml-4 text-neutral-500">
                            <div className={`flex items-center gap-4`}>
                                <span>{rota.icon}</span>
                                {expandido && (
                                    <label className="text-sm font-semibold">{rota.title}</label>
                                )}
                            </div>
                        </div>
                    </div>
                    <AnimatePresence initial={false}>
                        {rota.subRoute && expandido && (
                            <motion.div
                                initial={{height: 0, opacity: 0}}
                                animate={{height: 'auto', opacity: 1}}
                                exit={{height: 0, opacity: 0}}
                                transition={{duration: 0.25, ease: 'easeInOut'}}
                                style={{overflow: 'hidden'}}
                            >
                                <ul className="py-2 text-sm">
                                    {rota.subRoute.map((subRota) => (
                                        <li key={subRota.id}>
                                            <div className={`
                                                px-6
                                                overflow-x-hidden
                                                truncate
                                                flex
                                                items-center
                                                gap-2
                                                group
                                                rounded-lg
                                                h-8
                                                transition-all
                                                duration-200
                                            `}>
                                                {/* barrinha que empurra */}
                                                <div
                                                    className={`
                                                        h-full
                                                        w-0
                                                        border-l
                                                        border-l-neutral-300
                                                        group-hover:w-2
                                                        bg-blue-400
                                                        rounded-r-lg
                                                        transition-all
                                                        duration-200
                                                    `}></div>

                                                {/* conteúdo que será empurrado */}
                                                {expandido && (
                                                    <div
                                                        className={`
                                                        flex
                                                        items-center
                                                        w-full
                                                        gap-2
                                                        transition-all
                                                        duration-200 
                                                        group-hover:text-blue-400
                                                    `}>
                                                        <span className={`text-neutral-400 group-hover:text-blue-400`}><Dot /></span>
                                                        <label className="text-[10pt] font-normal">{subRota.title}</label>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </li>
            ))}
        </ul>
    )
}