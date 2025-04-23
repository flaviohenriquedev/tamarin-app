'use client'

import {Header} from "@/components/layouts/header/header";
import {ReactNode, useContext, useEffect} from "react";
import {SideMenuContext} from "@/context/sidemenu-context";
import {usePathname} from "next/navigation";
import {SideMenu} from "@/components/layouts/side-menu/side-menu";

export default function LayoutInicial({children}: { children: ReactNode }) {

    const pathname = usePathname();
    const {rotas, setRotas} = useContext(SideMenuContext);

    useEffect(() => {
        if (pathname === '/app') {
            setRotas([]);
        }
    }, [pathname, setRotas]);

    return (
        <main className={`flex`}>
            <SideMenu expanded={rotas.length > 0} rotas={rotas}/>
            <div className={`flex flex-col w-full h-full justify-center items-center gap-10`}>
                <Header/>
                {children}
            </div>
        </main>
    )
}