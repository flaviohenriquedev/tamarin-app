'use client'

import {SelectItem} from "@/components/ui/select-item/select-item";
import {InfoUsuario} from "@/components/layouts/info-usuario/info-usuario";
import {SideMenuContext} from "@/context/sidemenu-context";
import React, {useContext} from "react";
import {Breadcrumb} from "@/components/ui/breadcrumb/breadcrumb";
import {RouteType} from "@/types/RouteType";
import {ThemeChanger} from "@/components/theme-changer";

type Props = {
    rotas?: RouteType[];
}

export function Header({rotas}: Props) {

    const {setCliente} = useContext(SideMenuContext);

    return (
        <header className={`content-header bg-base-200 flex items-center justify-between pl-3 pr-4 w-full h-14 border-b border-base-300/50`}>
            {rotas && <Breadcrumb rotas={rotas}/>}
            <div className={`flex items-center gap-10 ml-auto`}>
                <SelectItem onSelect={setCliente} values={[
                    {
                        label: 'Claro S.A.'
                    },
                    {
                        label: 'Banco do Brasil'
                    },
                    {
                        label: 'Nubank'
                    }
                ]}/>
                <ThemeChanger />
                <InfoUsuario/>
            </div>
        </header>
    )
}