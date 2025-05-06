import {ReactNode} from "react";
import {RouteType} from "@/types/_root/RouteType";

type KeySistema =
    'RECURSOS_HUMANOS' |
    'GERENCIAMENTO_SISTEMA';

type InfoSistema = {
    key: KeySistema,
    label: string,
}

export type SistemaType = {
    sistema: InfoSistema,
    icone: ReactNode,
    href: string,
    destaque: boolean,
    rotas: RouteType[],
}