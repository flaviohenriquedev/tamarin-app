import {ReactNode} from "react";
import {RouteType} from "@/types/_root/RouteType";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";

export type SistemaType = {
    sistema: SistemaENUM,
    sistemaMaster: boolean;
    icone: ReactNode,
    href: string,
    destaque: boolean,
    rotas: RouteType[],
}

export type AcaoSalvar = 'SAVE' | 'SAVE_AND_CLOSE'