import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export type TColuna = {
    descricao: string;
    field: string;
    urlFotoPerfil?: string;
    tipoDado: TipoDadoEnum;
}
