import {ReactNode} from "react";
import {FuncionalidadeEnum, FuncionalidadeInfo} from "@/enums/FuncionalidadeEnum";
import {ModuloENUM} from "@/enums/ModuloEnum";

export type RouteType = {
    id: string;
    title?: string;
    modulo?: ModuloENUM;
    icon?: ReactNode;
    href?: string;
    roles?: string[];
    funcionalidades?: Partial<Record<FuncionalidadeEnum, FuncionalidadeInfo>>;
    subRoute?: RouteType[];
}
