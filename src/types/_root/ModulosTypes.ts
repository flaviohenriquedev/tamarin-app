import {ReactNode} from "react";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeEnum, FuncionalidadeInfo} from "@/enums/FuncionalidadeEnum";

export type ModulosType = {
    infos(): InfosModuloType;
    funcionalidades(): Partial<Record<FuncionalidadeEnum, FuncionalidadeInfo>>;
}

export type InfosModuloType = {
    id: string,
    modulo: ModuloENUM,
    title: string,
    icon?: ReactNode,
    href: string,
    funcionalidades: Partial<Record<FuncionalidadeEnum, FuncionalidadeInfo>>;
    abas?: InfosModuloType[];
}