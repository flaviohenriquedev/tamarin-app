import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export type ColunaType = {
    descricao: string;
    field: string;
    urlFotoPerfil?: string;
    tipoDado?: TipoDadoEnum;
}
