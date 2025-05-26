'use client'

import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
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
import {SistemaENUM, SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";

export function LayoutInicial({children}: { children: ReactNode }) {
    const {usuarioLogado, listaModulosPermitidos} = useUsuarioLogado();

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

    const filtrarModulosPermitidos = useCallback((modulos: RouteType[]) => {
        if (!usuarioLogado.usuarioMaster) {
            return modulos
                .map(modulo => {
                    if (modulo.modulo && listaModulosPermitidos.includes(modulo.modulo)) {
                        return modulo;
                    }

                    if (modulo.subRoute) {
                        const subFiltradas = modulo.subRoute.filter(sr =>
                            listaModulosPermitidos.includes(sr.modulo as string)
                        );
                        if (subFiltradas.length > 0) {
                            return {...modulo, subRoute: subFiltradas};
                        }
                    }

                    return null;
                })
                .filter(Boolean) as RouteType[];
        } else {
            return modulos;
        }
    }, [listaModulosPermitidos, usuarioLogado.usuarioMaster]);


    useEffect(() => {
        const filterMenu = () => {
            const filteredMap: { [key: string]: RouteType } = {};
            if (sistemaSelecionado?.rotas && listaModulosPermitidos) {
                filtrarModulosPermitidos(sistemaSelecionado?.rotas)?.forEach((d) => {
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
    }, [sistemaSelecionado?.rotas, searchMenu, listaModulosPermitidos, filtrarModulosPermitidos]);



    function renderizarSistemas() {
        return filtrarSistemasPorUsuario(rotasSistema).map(sistema => {
            return (
                <li key={sistema.sistema}
                    className={`p-2`}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={() => handleClick(sistema)}>

                    <div data-tip={SistemaENUMFactory.getDescricao(sistema.sistema)}
                         className={`
                            flex
                            transition-colors
                            duration-200
                            ${sistemaSelecionado && sistema.sistema !== sistemaSelecionado.sistema && mostrarTooltip ? 'tooltip' : ''}
                            ${sistemaSelecionado && sistema.sistema === sistemaSelecionado.sistema
                                ? aplicarClasseSistemaSelecionado(sistema.sistemaMaster)
                                : 'text-gray-300'}
                            tooltip-right
                            items-center
                            justify-center
                            p-2
                            rounded-md
                            `}>
                        <div className={`flex gap-[.3rem] flex-col items-center`}>
                        {sistema.icone}
                            <label className={`text-[8pt] text-center font-light`}>{SistemaENUMFactory.getLabel(sistema.sistema)}</label>
                        </div>
                    </div>
                </li>
        )
        })
    }

    function aplicarClasseSistemaSelecionado(sistemaMaster: boolean): string {
        return sistemaMaster ? 'bg-primary text-primary-content' : 'bg-base-100 text-primary'
    }

    function filtrarSistemasPorUsuario(sistemas: SistemaType[]) {
        if (!usuarioLogado.usuarioMaster) {
            const listaPerfil: Perfil[] = usuarioLogado.perfis.map(up => up.perfil);
            const sistemasPermitidos: SistemaENUM[] = listaPerfil.flatMap(lp => {
                return lp.sistemas.map(sis => sis.clienteSistema.keySistema)
            })
            return sistemas.filter(sistema => {
                return sistemasPermitidos.includes(sistema.sistema)
            })
        }
        return sistemas;
    }

    return (
        <div className={`container-sistema`}>

            <div className={`side-bar flex`}>
                <aside
                    className={`flex flex-col gap-4 w-18 shadow-[inset_-7px_1px_7px_-3px_rgba(0,_0,_0,_0.1)] bg-base-300 `}>
                    <div className={`flex border-b border-base-200 justify-center items-center h-12`}>
                        <Image src={"/assets/img/logo-tamarin.png"} alt={"logo"} width={30} height={30}/>
                    </div>

                    <ul className={`flex flex-col gap-2 h-full `}>
                        {renderizarSistemas()}
                    </ul>

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