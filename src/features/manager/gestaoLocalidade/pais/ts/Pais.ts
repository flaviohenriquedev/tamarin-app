import {EntidadePadrao} from "@/class/EntidadePadrao";

export class Pais extends EntidadePadrao {
    public nome: string;
    public nomePt: string;
    public sigla: string;
    public bacen: number;
    public ddi: number;

    constructor() {
        super();
    }
}