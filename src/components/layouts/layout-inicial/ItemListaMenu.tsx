import React, {useContext, useEffect, useRef, useState} from "react";
import {RouteType} from "@/types/_root/RouteType";
import {AnimatePresence, motion} from 'framer-motion';
import {ChevronDown, Dot} from "lucide-react";
import {ContextListaMenu} from "@/components/layouts/layout-inicial/ContextListaMenu";
import {useRouter} from "next/navigation";

type Props = {
    rota: RouteType;
}

export function ItemListaMenu({rota}: Props) {

    const {sideBarExpandido} = useContext(ContextListaMenu);
    const [submenusVisiveis, setSubmenusVisiveis] = useState<Record<string, boolean>>({});
    const mostrarSubMenu = submenusVisiveis[rota.id as string] ?? false;
    const estadoAnterior = useRef(false);

    const router = useRouter();

    useEffect(() => {
        if (!sideBarExpandido) {
            estadoAnterior.current = mostrarSubMenu; // salva antes de sumir
            setSubmenusVisiveis({...submenusVisiveis, [rota.id as string]: false}); // fecha visualmente
        } else {
            // se estava aberto antes de esconder, reabre
            if (estadoAnterior.current) {
                setSubmenusVisiveis({...submenusVisiveis, [rota.id as string]: true});
            }
        }
    }, [mostrarSubMenu, rota.id, sideBarExpandido, submenusVisiveis]);


    const toggleSubMenu = () => {
        setSubmenusVisiveis({
            ...submenusVisiveis,
            [rota.id as string]: !mostrarSubMenu
        });
    };

    const navigate = (rota: RouteType) => {
        if (rota.subRoute && rota.subRoute.length > 0) {
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
            <div className={`
                flex
                group
                items-center
                h-10
                transition-transform
                duration-200
                hover:bg-primary/10  
            `}
                 onClick={toggleSubMenu}>
                <div
                    className={`
                                h-full
                                w-0
                                ${mostrarSubMenu ? 'w-1 bg-primary' : 'group-hover:w-1 bg-primary'}
                                rounded-r-lg
                                transition-all
                                duration-200
                            `}></div>
                <div
                    className={`
                        flex
                        pl-3
                        items-center
                        w-full
                        justify-between
                        gap-5
                        ml-4
                        text-base-content
                    `}>
                    <div className={`
                        flex
                        items-center
                        gap-4
                        group-hover:text-primary
                    `}>
                        <span>{rota.icon}</span>
                        <AnimatePresence mode="wait">
                            {sideBarExpandido && (
                                <motion.label
                                    key="label"
                                    initial={{opacity: 0, x: 20}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: 20}}
                                    transition={{duration: 0.2}}
                                    className="text-sm font-semibold "
                                >
                                    {rota.title}
                                </motion.label>
                            )}
                        </AnimatePresence>
                    </div>
                    {sideBarExpandido && rota.subRoute && (
                        <div className={`
                            transition-transform
                            group-hover:text-primary
                            duration-300
                            px-2
                            ${mostrarSubMenu && 'rotate-180'}
                        `}>
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
                                                cursor-pointer
                                                px-10
                                                overflow-x-hidden
                                                truncate
                                                flex
                                                items-center
                                                rounded-lg
                                                h-8
                                                transition-transform
                                                duration-200
                                            `}>
                                        {mostrarSubMenu && (
                                            <div
                                                onClick={() => navigate(subRota)}
                                                className={`
                                                        flex
                                                        items-center
                                                        w-full
                                                        h-full
                                                        border-l
                                                        border-transparent
                                                        gap-2
                                                        transition-all
                                                        ease-in-out
                                                        duration-200
                                                        rounded-lg
                                                        font-light
                                                        text-base-content
                                                        hover:text-primary
                                                        hover:bg-primary/10
                                                        hover:border-base-content/10
                                                    `}
                                            >
                                                <Dot/>
                                                <span className="text-[10pt]">{subRota.title}</span>
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