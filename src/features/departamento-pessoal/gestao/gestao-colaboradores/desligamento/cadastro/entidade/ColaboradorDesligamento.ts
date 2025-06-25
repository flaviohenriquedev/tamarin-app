import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {
    TipoDesligamentoCLTEnum
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/ts/TipoDesligamentoCLTEnum";

export class ColaboradorDesligamento extends EntidadeTenant {
    public colaborador: Colaborador;
    public dataDesligamento: Date;
    public tipoDesligamento: TipoDesligamentoCLTEnum;
    public avisoPrevio: boolean;
    public dataInicioAvisoPrevio: Date;
    public dataFimAvisoPrevio: Date;

    constructor() {
        super();
        this.colaborador = new Colaborador();
    }
}