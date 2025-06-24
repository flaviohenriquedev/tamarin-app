import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";

export class ColaboradorDesligamento extends EntidadeTenant {
    public colaborador: Colaborador;
    public periodoInicial: Date;
    public periodoFinal: Date;
    public observacoes: string

    constructor() {
        super();
        this.colaborador = new Colaborador();
    }
}