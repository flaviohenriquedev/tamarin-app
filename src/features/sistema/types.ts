import {ReactNode} from "react";
import {RouteType} from "@/types/_root/RouteType";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";

export type SistemaType = {
    sistema: SistemaENUM,
    icone: ReactNode,
    href: string,
    destaque: boolean,
    rotas: RouteType[],
}