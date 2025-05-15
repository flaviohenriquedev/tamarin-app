import {ReactNode} from "react";
import {FuncionalidadesType, InfosModuloType} from "@/types/_root/ModulosTypes";

export type RouteType = {
    id?: string;
    title?: string;
    modulo?: string;
    icon?: ReactNode;
    href?: string;
    subRoute?: RouteType[];
    roles?: string[];
    modulos?: { [key: string]: InfosModuloType };
    funcionalidades?: { [key: string]: FuncionalidadesType; };
}
