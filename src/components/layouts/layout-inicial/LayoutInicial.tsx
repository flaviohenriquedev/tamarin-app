'use client'

import React, {ReactNode, useContext, useEffect, useState} from "react";
import './style.css'
import {Header} from "@/components/layouts/header/Header";
import {RouteType} from "@/types/_root/RouteType";
import {ChevronLeft} from "lucide-react";
import {ListaMenu} from "@/components/layouts/layout-inicial/ListaMenu";
import {motion} from "framer-motion";
import {useSistemaContext} from "@/features/sistema/sistema-context";
import LogoSistema from "@/features/sistema/logo-sistema";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuarioLogadoContext";
import {ContextListaMenu} from "@/components/layouts/layout-inicial/ContextListaMenu";
import {getRotasPorSistema, usuarioPossuiAcessoAoModulo} from "@/features/sistema/functions";

export function LayoutInicial({children}: { children: ReactNode }) {

    const {usuarioLogado} = useUsuarioLogado();
    const {sistemaSelecionado} = useSistemaContext();
    const {sideBarExpandido, setSideBarExpandido} = useContext(ContextListaMenu)

    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<RouteType[]>();

    function expandirRetrairSidebar() {
        setSideBarExpandido(!sideBarExpandido);
    }

    useEffect(() => {
        const filterMenu = () => {
            const filteredMap: { [key: string]: RouteType } = {};

            if (sistemaSelecionado) {
                getRotasPorSistema(sistemaSelecionado).forEach((d) => {
                    if (d.modulo && !usuarioPossuiAcessoAoModulo(d, usuarioLogado)) return;
                    const filteredMenu: RouteType = { ...d };
                    if (d.subRoute) {
                        const filteredSubmenu = d.subRoute.filter((sub) => {
                            const temAcesso = !sub.modulo || usuarioPossuiAcessoAoModulo(sub, usuarioLogado);
                            const bateBusca = sub.title?.toLowerCase().includes(searchMenu.toLowerCase());
                            return temAcesso && bateBusca;
                        });

                        if (filteredSubmenu.length > 0) {
                            filteredMenu.subRoute = filteredSubmenu;
                            if (d.title) filteredMap[d.title] = filteredMenu;
                        }
                    } else if (
                        d.title?.toLowerCase().includes(searchMenu.toLowerCase())
                    ) {
                        if (d.title) filteredMap[d.title] = filteredMenu;
                    }
                });
            }

            const filtered: RouteType[] = Object.values(filteredMap);
            setFilteredData(filtered);
        };

        filterMenu();
    }, [searchMenu, sistemaSelecionado, usuarioLogado, usuarioLogado.dadosAcesso]);

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
                            className={`flex items-center px-5 text-neutral-900 h-12 font-semibold w-full`}>
                            <div className={`flex justify-start items-center w-fit`}>
                                <LogoSistema width={100} height={50} sidebarExpandido={sideBarExpandido}/>
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
                                        hover:text-primary
                                        bg-base-100
                                        backdrop-blur
                                    `}
                            >
                                <ChevronLeft size={15}/>
                            </motion.button>
                        </div>

                        {/*{sideBarExpandido && (*/}
                        {/*    <div className="flex items-center justify-start w-full">*/}
                        {/*        <div*/}
                        {/*            className={`flex items-center w-full h-10 rounded-lg px-3 bg-neutral-100 transition-all duration-300 ${*/}
                        {/*                sideBarExpandido ? 'justify-between' : 'justify-center'*/}
                        {/*            }`}*/}
                        {/*        >*/}
                        {/*            <input*/}
                        {/*                value={searchMenu}*/}
                        {/*                onChange={(e) => setSearchMenu(e.target.value)}*/}
                        {/*                className="w-full h-full border-none outline-none bg-transparent transition-all duration-300"*/}
                        {/*                placeholder="Buscar..."*/}
                        {/*            />*/}
                        {/*            <span*/}
                        {/*                className={`text-violet-400 transition-all duration-300 ${*/}
                        {/*                    !sideBarExpandido ? 'mx-auto' : 'ml-auto'*/}
                        {/*                }`}*/}
                        {/*            ><Search/></span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*)}*/}

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