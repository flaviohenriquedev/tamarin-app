import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Estado} from "@/features/manager/gestaoLocalidade/estado/ts/Estado";

export class Cidade extends EntidadePadrao {
    nome: string;
    estado: Estado;
    ibge: number;
    latLon: string;
    codTom: number

    constructor() {
        super();
        this.estado = new Estado();
    }
}