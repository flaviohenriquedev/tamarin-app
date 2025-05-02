import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Estado} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado";

export class Cidade extends EntidadePadrao {
    nome: string;
    estado: Estado;
    ibge: number;
    latLon: string;
    codTom: number
}