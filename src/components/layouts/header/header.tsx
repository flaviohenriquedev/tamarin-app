'use client'

import {SelectItem} from "@/components/ui/select-item/select-item";
import {InfoUsuario} from "@/components/layouts/info-usuario/info-usuario";
import {SideMenuContext} from "@/context/sidemenu-context";
import {useContext} from "react";

export function Header() {

    const {setCliente} = useContext(SideMenuContext);

    return (
        <header className={`flex items-center justify-end gap-10 px-10 w-full max-h-20 min-h-20`}>
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
            <InfoUsuario />
        </header>
    )
}