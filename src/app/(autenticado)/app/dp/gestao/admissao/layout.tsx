'use client'

import {ReactNode} from "react";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {AbasNavegacao} from "@/components/ui/abas-navegacao/AbasNavegacao";

export default function LayoutAdmissao({children}: { children: ReactNode }) {
    return (
        <>
            <AbasNavegacao modulo={ModuloENUM.GESTAO_COLABORADORES}/>
            {children}
        </>
    )
}