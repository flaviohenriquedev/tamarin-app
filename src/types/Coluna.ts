import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export type Coluna = {
    descricao: string;
    field: string;
    urlFotoPerfil?: string;
    tipoDado: TipoDadoEnum;
}
