import {IoIosArrowDown} from "react-icons/io";
import {SubRotas} from "@/app/(desenvolvimento)/dev/pagina-inicial/sub-rotas";
import React, {useState} from "react";
import {RouteType} from "@/types/_root/RouteType";
import {AnimatePresence, motion} from 'framer-motion';

type Props = {
    rota: RouteType;
}

export function ItemListaMenu({rota}: Props) {
    const [mostrarSubMenu, setMostrarSubMenu] = useState<boolean>(false);

    return (
        <li
            key={rota.id}
        >
            <div className={`flex items-center group rounded-lg  h-10 transition-all duration-200`}
                 onClick={() => setMostrarSubMenu(!mostrarSubMenu)}>
                {/* barrinha que empurra */}
                <div
                    className="h-full w-0 group-hover:w-2 bg-indigo-500 rounded-r-lg transition-all duration-200"></div>

                {/* conteúdo que será empurrado */}
                <div
                    className="flex items-center w-full justify-between gap-5 ml-4 transition-all duration-200 group-hover:ml-4 group-hover:text-indigo-500">
                    <div className={`flex items-center gap-2`}>
                        <span>{rota.icon}</span>
                        <label className="text-md">{rota.title}</label>
                    </div>
                    <motion.div
                        className={`px-4`}
                        animate={{ rotate: mostrarSubMenu ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoIosArrowDown />
                    </motion.div>
                </div>
            </div>
            {rota.subRoute && (
                <AnimatePresence initial={false}>
                    {mostrarSubMenu && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                        >
                            <SubRotas subRotas={rota.subRoute} />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </li>
    )
}