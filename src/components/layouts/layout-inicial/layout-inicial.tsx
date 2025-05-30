'use client'

import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import './style.css'
import {Header} from "@/components/layouts/header/header";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {RouteType} from "@/types/_root/RouteType";
import {SistemaType} from "@/features/sistema/types";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";
import {ArrowLeft, Feather, Search} from "lucide-react";
import {ListaMenu} from "@/components/layouts/layout-inicial/lista-menu";

export function LayoutInicial({children}: { children: ReactNode }) {
    const {usuarioLogado, listaModulosPermitidos} = useUsuarioLogado();

    const [sistemaSelecionado, setSistemaSelecionado] = useState<SistemaType>();
    const [mostrarTooltip, setMostrarTooltip] = useState<boolean>();
    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<RouteType[]>();
    const [sidebarExpandido, setSidebarExpandido] = useState<boolean>(true);
    const [listaAberta, setListaAberta] = useState<boolean>(true);

    function expandirRetrairSidebar() {
        if (listaAberta && sidebarExpandido) {
            setListaAberta(false)
            setTimeout(() => {
                setSidebarExpandido(false);
            }, 300)
        }

        if (!listaAberta && !sidebarExpandido) {
            setSidebarExpandido(true)
            setTimeout(() => {
                setListaAberta(true);
            }, 300)
        }
    }

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
    return (
        <div className={`container-sistema`}>
            <div className={`side-bar flex`}>
                <aside
                    className={`
                                relative
                                flex
                                flex-col
                                gap-2
                                px-3
                                arcano-container
                                backdrop-blur-sm
                                border
                                transition-all
                                duration-300
                                border-white
                                ${sidebarExpandido ? 'w-72' : 'items-start w-20'}
                            `}
                >
                    <div
                        className={`flex items-center gap-3 text-neutral-900 p-4 h-16 text-2xl font-semibold `}>
                        <div className={`flex items-center gap-3 `}>
                            <Feather size={25}/>
                            {sidebarExpandido && (
                                <label>Arcano</label>
                            )}
                        </div>
                        <button
                            onClick={expandirRetrairSidebar}
                            className={`
                                        absolute
                                        -right-4
                                        z-50
                                        p-2
                                        border
                                        border-neutral-200
                                        rounded-full
                                        shadow-lg
                                        transition-all
                                        duration-200
                                        cursor-pointer
                                        hover:text-blue-400
                                        bg-white
                                        backdrop-blur
                                        ${!sidebarExpandido && 'rotate-180'}
                                    `}
                        >
                            <ArrowLeft size={15} />
                        </button>
                    </div>

                    <div className={`flex items-center justify-start w-full p-2`}>
                        {sidebarExpandido ? (
                            <input
                                className={`w-full py-2 px-4 rounded-lg outline-none bg-neutral-100`}
                                placeholder={`Search`}/>
                        ) : (
                            <div className={`py-2 px-2`}><Search/></div>
                        )}
                    </div>
                    {filteredData && (
                        <ListaMenu rotas={filteredData}
                                   expandido={listaAberta}/>
                    )}
                </aside>
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