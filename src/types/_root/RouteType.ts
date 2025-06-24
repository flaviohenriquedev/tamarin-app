import {ReactNode} from "react";
import {FuncionalidadeEnum, FuncionalidadeInfo} from "@/enums/FuncionalidadeEnum";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {InfosModuloType, ModuloIds} from "@/types/_root/ModulosTypes";

export type RouteType = {
    id: ModuloIds;
    title?: string;
    modulo?: ModuloENUM;
    icon?: ReactNode;
    href?: string;
    roles?: string[];
    funcionalidades?: Partial<Record<FuncionalidadeEnum, FuncionalidadeInfo>>;
    abas?: InfosModuloType[];
    subRoute?: RouteType[];
}
