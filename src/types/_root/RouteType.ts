import {ReactNode} from "react";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {InfosModuloType} from "@/types/_root/ModulosTypes";

export type RouteType = {
    id?: string;
    title?: string;
    module?: ModuloENUM;
    icon?: ReactNode;
    href?: string;
    subRoute?: RouteType[];
    roles?: string[];
    modulos?: { [key: string]: InfosModuloType }
}
