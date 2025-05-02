import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Pais} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais";

export class Estado extends EntidadePadrao {
    nome: string;
    sigla: string;
    ibge: number;
    pais: Pais;
    ddd: number[];
}