import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Pais} from "@/features/manager/gestaoLocalidade/pais/ts/Pais";

export class Estado extends EntidadePadrao {
    nome: string;
    sigla: string;
    ibge: number;
    pais: Pais;
    ddd: number[];

    constructor() {
        super();
        this.pais = new Pais();
    }
}