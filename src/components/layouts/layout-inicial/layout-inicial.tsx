'use client'

import React, {ReactNode, useCallback, useContext, useEffect, useState} from "react";
import './style.css'
import {Header} from "@/components/layouts/header/header";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {RouteType} from "@/types/_root/RouteType";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";
import {ChevronLeft, Feather, Search} from "lucide-react";
import {ListaMenu} from "@/components/layouts/layout-inicial/lista-menu";
import {ContextListaMenu} from "@/components/layouts/layout-inicial/context-lista-menu";
import {motion} from "framer-motion";
import {useSistemaContext} from "@/features/sistema/sistema-context";

export function LayoutInicial({children}: { children: ReactNode }) {

    const { sistemaSelecionado, selecionarSistema } = useSistemaContext();

    const {sideBarExpandido, setSideBarExpandido} = useContext(ContextListaMenu)
    const {usuarioLogado, listaModulosPermitidos} = useUsuarioLogado();

    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<RouteType[]>();

    function expandirRetrairSidebar() {
        setSideBarExpandido(!sideBarExpandido);
    }

    useEffect(() => {
        const sistemaSelecionadoStorage = localStorage.getItem("sistemaSelecionado");
        if (sistemaSelecionadoStorage) {
            const sistemaEncontrado = rotasSistema.find(s => s.sistema === sistemaSelecionadoStorage);
            if (sistemaEncontrado) {
                selecionarSistema(sistemaEncontrado);
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
    return (
        <div className={`container-sistema`}>
            <div className={`side-bar flex`}>
                <motion.aside
                    initial={false}
                    animate={{width: sideBarExpandido ? 288 : 80}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    className={`
                                relative
                                flex
                                flex-col
                                gap-2
                                arcano-container
                                backdrop-blur-sm
                                border
                                transition-all
                                duration-300
                                border-white
                                ${sideBarExpandido ? 'w-72' : 'items-start w-20'}
                            `}
                >
                    <div className={`flex flex-col items-center`}>
                        <div
                            className={`flex items-center gap-3 text-neutral-900 h-16 text-2xl font-semibold `}>
                            <div className={`flex items-center gap-3 pl-3 `}>
                                <Feather size={25}/>
                                {sideBarExpandido && (
                                    <label>Arcano</label>
                                )}
                            </div>
                            <motion.button
                                onClick={expandirRetrairSidebar}
                                animate={{rotate: sideBarExpandido ? 0 : 180}}
                                transition={{duration: 0.25}}
                                className={`
                                        absolute
                                        -right-3
                                        z-50
                                        p-1
                                        border
                                        border-neutral-200
                                        rounded-full
                                        transition-all
                                        duration-200
                                        cursor-pointer
                                        hover:text-blue-400
                                        bg-white
                                        backdrop-blur
                                        ${!sideBarExpandido && 'rotate-180'}
                                    `}
                            >
                                <ChevronLeft size={15}/>
                            </motion.button>
                        </div>

                        <div className="flex items-center justify-start w-full">
                            <div
                                className={`flex items-center w-full h-10 rounded-lg px-3 bg-neutral-100 transition-all duration-300 ${
                                    sideBarExpandido ? 'justify-between' : 'justify-center'
                                }`}
                            >
                                {sideBarExpandido && (
                                    <input
                                        value={searchMenu}
                                        onChange={(e) => setSearchMenu(e.target.value)}
                                        className="w-full h-full border-none outline-none bg-transparent transition-all duration-300"
                                        placeholder="Buscar..."
                                    />
                                )}
                                <span
                                    className={`text-violet-400 transition-all duration-300 ${
                                        !sideBarExpandido ? 'mx-auto' : 'ml-auto'
                                    }`}
                                ><Search/></span>
                            </div>
                        </div>

                    </div>
                    {filteredData && (
                        <ListaMenu rotas={filteredData}/>
                    )}
                </motion.aside>
            </div>

            <div className={`content`}>
                <Header sistema={sistemaSelecionado && sistemaSelecionado}/>
                <div className={`content-page container-glass rounded-lg p-2`}>
                    {children}
                </div>
            </div>
        </div>
    )
}