import {ReactNode} from "react";
import {FuncionalidadesType} from "@/types/_root/ModulosTypes";

export type RouteType = {
    id?: string;
    title?: string;
    modulo?: string;
    icon?: ReactNode;
    href?: string;
    subRoute?: RouteType[];
    roles?: string[];
    funcionalidades?: { [key: string]: FuncionalidadesType; };
}
