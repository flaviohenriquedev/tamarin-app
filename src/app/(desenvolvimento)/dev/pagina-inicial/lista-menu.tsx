import React from "react";
import {RouteType} from "@/types/_root/RouteType";
import {AnimatePresence, motion} from "framer-motion";

type Props = {
    rotas: RouteType[]
}

export function ListaMenu({rotas}: Props) {
    return (
        <ul className="flex flex-col mt-10 gap-2">
            {rotas.map((rota) => (
                <li key={rota.id}>
                    <div className={`flex items-center rounded-lg h-10 transition-all duration-200`}>
                        {/* barrinha que empurra */}
                        <div
                            className="flex items-center w-full justify-between gap-5 ml-4 text-neutral-500">
                            <div className={`flex items-center gap-2`}>
                                <span>{rota.icon}</span>
                                <label className="text-sm font-semibold">{rota.title}</label>
                            </div>
                        </div>
                    </div>
                    {rota.subRoute && (
                        <AnimatePresence initial={false}>
                            <motion.div
                                initial={{height: 0, opacity: 0}}
                                animate={{height: 'auto', opacity: 1}}
                                exit={{height: 0, opacity: 0}}
                                transition={{duration: 0.25, ease: 'easeInOut'}}
                                style={{overflow: 'hidden'}}
                            >
                                <ul className="py-2 text-sm text-zinc-700 space-y-1">
                                    {rota.subRoute.map((subRota) => (
                                        <li key={subRota.id}>
                                            <div className={`flex items-center group rounded-lg h-10 transition-all duration-200`}>
                                                {/* barrinha que empurra */}
                                                <div
                                                    className="h-full w-0 group-hover:w-2 bg-indigo-500 rounded-r-lg transition-all duration-200"></div>

                                                {/* conteúdo que será empurrado */}
                                                <div
                                                    className="flex px-8 items-center w-full justify-between gap-5 ml-4 transition-all duration-200 group-hover:ml-4 group-hover:text-indigo-500">
                                                    <div className={`flex items-center gap-2`}>

                                                        <label className="text-md">{subRota.title}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </li>
            ))}
        </ul>
    )
}