import {EntidadeTenant} from "@/class/EntidadeTenant";

export class CargaHoraria extends EntidadeTenant {
    public horaInicial: number;
    public horaFinal: number;
    public horaAlmoco: number;
    public descricao: string;

    constructor() {
        super();
    }
}