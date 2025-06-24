import {Fragment, ReactNode} from "react";
import {AbasNavegacao} from "@/components/ui/abas-navegacao/AbasNavegacao";
import {ModuloENUM} from "@/enums/ModuloEnum";

export default function LayoutDesligamento({ children }: {children: ReactNode}) {
    return (
        <Fragment>
            <AbasNavegacao modulo={ModuloENUM.GESTAO_DESLIGAMENTO} />
            {children}
        </Fragment>
    )
}