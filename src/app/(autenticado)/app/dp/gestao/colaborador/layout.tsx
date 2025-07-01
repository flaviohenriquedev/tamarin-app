import {ReactNode} from "react";
import {AbasNavegacao} from "@/components/ui/abas-navegacao/AbasNavegacao";
import {ModuloENUM} from "@/enums/ModuloEnum";

export default function LayoutColaborador({ children }: {children: ReactNode}) {
    return (
        <>
            <AbasNavegacao modulo={ModuloENUM.GESTAO_COLABORADORES}/>
            {children}
        </>
    )
}