import {EntidadeCliente} from "@/class/EntidadeCliente";

export class CargaHoraria extends EntidadeCliente {
    public horaInicial: number;
    public horaFinal: number;
    public horaAlmoco: number;
    public descricao: string;

    constructor() {
        super();
    }
}