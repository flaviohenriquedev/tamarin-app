import {ReactNode} from "react";

export type ModulosType<M extends string = string> = {
    infos(): InfosModuloType<M>;
    funcionalidades?(): { [key: string]: FuncionalidadesType };
}

export type FuncionalidadesType = {
    label: string;
};

export type InfosModuloType<M extends string = string> = {
    id: string,
    modulo: M,
    title: string,
    icon?: ReactNode,
    href: string,
    funcionalidades?: { [key: string]: FuncionalidadesType; };
}

export type ModuloFuncionalidade = {
    funcionalidades: {
        [key: string]: FuncionalidadesType;
    };
};
