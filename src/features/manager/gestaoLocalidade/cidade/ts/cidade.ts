import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Estado} from "@/features/manager/gestaoLocalidade/estado/ts/estado";

export class Cidade extends EntidadePadrao {
    nome: string;
    estado: Estado;
    ibge: number;
    latLon: string;
    codTom: number
}