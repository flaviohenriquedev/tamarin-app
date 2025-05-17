import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export type ColumnType = {
    descricao: string;
    field: string;
    urlFotoPerfil?: string;
    tipoDado?: TipoDadoEnum;
}
