import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";

export class ColaboradorFerias extends EntidadeTenant {
    public colaborador: Colaborador;
    public periodoInicial: Date;
    public periodoFinal: Date;
    public observacoes: string

    constructor() {
        super();
        this.colaborador = new Colaborador();
    }
}