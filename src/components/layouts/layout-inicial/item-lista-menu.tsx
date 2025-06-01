import React, {useContext, useEffect, useRef, useState} from "react";
import {RouteType} from "@/types/_root/RouteType";
import {AnimatePresence, motion} from 'framer-motion';
import {ChevronDown, Dot} from "lucide-react";
import {ContextListaMenu} from "@/components/layouts/layout-inicial/context-lista-menu";
import {useRouter} from "next/navigation";

type Props = {
    rota: RouteType;
}

export function ItemListaMenu({rota}: Props) {

    const { sideBarExpandido} = useContext(ContextListaMenu);
    const [submenusVisiveis, setSubmenusVisiveis] = useState<Record<string, boolean>>({});
    const mostrarSubMenu = submenusVisiveis[rota.id as string] ?? false;
    const estadoAnterior = useRef(false);

    const router = useRouter();

    useEffect(() => {
        if (!sideBarExpandido) {
            estadoAnterior.current = mostrarSubMenu; // salva antes de sumir
            setSubmenusVisiveis({ ...submenusVisiveis, [rota.id as string]: false }); // fecha visualmente
        } else {
            // se estava aberto antes de esconder, reabre
            if (estadoAnterior.current) {
                setSubmenusVisiveis({ ...submenusVisiveis, [rota.id as string]: true });
            }
        }
    }, [sideBarExpandido]);


    const toggleSubMenu = () => {
        setSubmenusVisiveis({
            ...submenusVisiveis,
            [rota.id as string]: !mostrarSubMenu
        });
    };

    const navigate = (rota: RouteType) => {
        if (rota.subRoute) {
            setSubmenusVisiveis({
                ...submenusVisiveis,
                [rota.id as string]: !mostrarSubMenu
            });
            return;
        }
        return router.push(rota.href as string);
    }

    return (
        <li key={rota.id}>
            <div className={`flex group items-center hover:bg-violet-50 rounded-r-lg h-10 transition-all duration-200 `}
                 onClick={toggleSubMenu}>

                {/* barrinha que empurra */}
                <div
                    className={`
                                h-full
                                w-0
                                ${mostrarSubMenu ? 'w-1 bg-violet-600' : 'group-hover:w-1 bg-violet-400'}
                                rounded-r-lg
                                transition-all
                                duration-200
                            `}></div>

                <div
                    className="flex pl-3 items-center w-full justify-between gap-5 ml-4 text-neutral-500">
                    <div className={`flex items-center gap-4 group-hover:text-violet-500`}>
                        <span>{rota.icon}</span>
                        <AnimatePresence mode="wait">
                            {sideBarExpandido && (
                                <motion.label
                                    key="label"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-sm font-semibold "
                                >
                                    {rota.title}
                                </motion.label>
                            )}
                        </AnimatePresence>
                    </div>
                    {sideBarExpandido && (
                        <div className={`transition-transform group-hover:text-violet-500 duration-300 px-2 ${mostrarSubMenu && 'rotate-180'}`}>
                            <ChevronDown size={18}/>
                        </div>
                    )}
                </div>
            </div>
            <AnimatePresence initial={false} mode="wait">
                {rota.subRoute && mostrarSubMenu && (
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
                                                px-10
                                                overflow-x-hidden
                                                truncate
                                                flex
                                                items-center
                                                rounded-lg
                                                h-8
                                                transition-all
                                                duration-200
                                            `}
                                    onClick={() => navigate(subRota)}>
                                        {mostrarSubMenu && (
                                            <div
                                                className={`
                                                        flex
                                                        items-center
                                                        w-full
                                                        h-full
                                                        border-l
                                                        border-neutral-300
                                                        gap-2
                                                        transition-all
                                                        duration-200
                                                        hover:text-violet-400 hover:font-bold
                                                    `}
                                            >
                                                <label className={`text-neutral-400`}><Dot /></label>
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
    )
}