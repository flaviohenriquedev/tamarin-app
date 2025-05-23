'use client'

import React, {ReactNode, useEffect, useRef, useState} from "react";
import './style.css'
import {Header} from "@/components/layouts/header/header";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {Sidemenu} from "@/components/layouts/sidemenu/sidemenu";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {RouteType} from "@/types/_root/RouteType";
import {InputSearch} from "@/components/ui/input/input-search";
import {SistemaType} from "@/features/sistema/types";
import {InfoCliente} from "@/components/layouts/info-cliente";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {useUsuario} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";

export function LayoutInicial({children}: { children: ReactNode }) {
    const user = useUsuario();


    const [sistemaSelecionado, setSistemaSelecionado] = useState<SistemaType>();
    const [mostrarTooltip, setMostrarTooltip] = useState<boolean>();
    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<RouteType[]>();

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    function onMouseEnter() {
        timeoutRef.current = setTimeout(() => {
            setMostrarTooltip(true);
        }, 800);
    }

    function onMouseLeave() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setMostrarTooltip(!mostrarTooltip);
    }

    function handleClick(sistema: SistemaType) {
        setSistemaSelecionado(sistema)
        localStorage.setItem("sistemaSelecionado", sistema.sistema)
    }

    useEffect(() => {
        const sistemaSelecionadoStorage = localStorage.getItem("sistemaSelecionado");
        if (sistemaSelecionadoStorage) {
            const sistemaEncontrado = rotasSistema.find(s => s.sistema === sistemaSelecionadoStorage);
            if (sistemaEncontrado) {
                setSistemaSelecionado(sistemaEncontrado);
            }
        }
    }, [])

    useEffect(() => {
        const filterMenu = () => {
            const filteredMap: { [key: string]: RouteType } = {};
            if (sistemaSelecionado?.rotas) {
                sistemaSelecionado?.rotas.forEach((d) => {
                    const filteredMenu: RouteType = {...d};
                    if (
                        d.title?.toLowerCase()
                            .includes(searchMenu.toLowerCase()) ||
                        (d.subRoute && d.subRoute.some((sub) =>
                            sub.title?.toLowerCase()
                                .includes(searchMenu.toLowerCase())
                        ))
                    ) {
                        if (d.title) filteredMap[d.title] = filteredMenu;
                    }

                    if (d.subRoute) {
                        const filteredSubmenu = d.subRoute.filter((sub) =>
                            sub.title?.toLowerCase()
                                .includes(searchMenu.toLowerCase())
                        );
                        if (filteredSubmenu.length > 0) {
                            filteredMenu.subRoute = filteredSubmenu;
                            if (d.title) filteredMap[d.title] = filteredMenu;
                        }
                    }
                })
            }
            const filtered: RouteType[] = Object.values(filteredMap);
            setFilteredData(filtered);
        };

        filterMenu();
    }, [sistemaSelecionado?.rotas, searchMenu]);

    function renderizarSistemas() {
        return rotasSistema.map(sistema => {
            return (
                <li key={sistema.sistema}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={() => handleClick(sistema)}>

                    <div data-tip={SistemaENUMFactory.getDescricao(sistema.sistema)}
                         className={`
                            flex
                            transition-colors
                            duration-200
                            ${sistemaSelecionado && sistema.sistema !== sistemaSelecionado.sistema && mostrarTooltip ? 'tooltip' : ''}
                            ${sistemaSelecionado && sistema.sistema === sistemaSelecionado.sistema ? `
                                bg-base-100
                                text-primary
                            ` : "text-gray-300"}
                            tooltip-right
                            items-center
                            justify-center
                            p-4
                            `}>
                        <div className={`flex gap-[.4rem] flex-col items-center`}>
                        {sistema.icone}
                            <label className={`text-[8pt] text-center font-light`}>{SistemaENUMFactory.getLabel(sistema.sistema)}</label>
                        </div>
                    </div>
                </li>
        )
        })
    }

    return (
        <div className={`container-sistema`}>

            <div className={`side-bar flex`}>
                <aside
                    className={`flex flex-col gap-4 w-18 shadow-[inset_-7px_1px_7px_-3px_rgba(0,_0,_0,_0.1)] bg-base-300 `}>
                    <div className={`flex border-b border-base-200 justify-center items-center h-12`}>
                        <Image src={"/assets/img/logo-tamarin.png"} alt={"logo"} width={30} height={30}/>
                    </div>

                    <ul className={`flex flex-col gap-2 h-screen `}>{renderizarSistemas()}</ul>
                </aside>

                <AnimatePresence initial={false}>
                    {filteredData && filteredData.length > 0 && (
                        <motion.aside
                            className={`flex gap-4 flex-col h-screen border-r border-base-300 bg-base-200`}
                            initial={{width: 0, opacity: 0}}
                            animate={{width: '16rem', opacity: 1}}
                            exit={{width: 0, opacity: 0}}
                            transition={{duration: 0.2}}
                        >
                            <InfoCliente/>
                            <InputSearch
                                placeholder={`Filtrar...`}
                                onChange={(e) => setSearchMenu(e.target.value)}/>
                            <Sidemenu rotas={filteredData}/>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </div>

            <div className={`content`}>
                <Header sistema={sistemaSelecionado && sistemaSelecionado}/>
                <div className={`content-page `}>
                    {children}
                </div>
            </div>
        </div>
    )
}