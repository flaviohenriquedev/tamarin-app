import {ReactNode} from "react";
import {ModuloENUM} from "@/enums/ModuloEnum";

export type RouteType = {
    id: string;
    title: string;
    module?: ModuloENUM;
    icon?: ReactNode;
    href?: string;
    subRoute?: RouteType[];
}
