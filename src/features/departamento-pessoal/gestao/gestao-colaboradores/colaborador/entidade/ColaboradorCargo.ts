import {EntidadePadrao} from "@/class/EntidadePadrao";
import {
    Colaborador
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/Colaborador";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";
import {CargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {
    FormaPagamentoENUM
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/enums/FormaPagamentoENUM";
import {
    TipoSalarioENUM
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/enums/TipoSalarioENUM";

export class ColaboradorCargo extends EntidadePadrao {
    public colaborador: Colaborador;
    public dataAdmissao: Date;
    public vigenciaInicial: Date;
    public vigenciaFinal: Date;
    public salario: number;
    public possuiSindicato: boolean;
    public cargo: Cargo;
    public tipoContrato: TipoContrato;
    public cargaHoraria: CargaHoraria;
    public departamento: Departamento;

    public quantidadeDiasExperiencia: number;
    public dataExperiencia: Date;
    public quantidadeDiasProrrogacao: number;
    public dataProrrogacao: Date;

    public formaPagamento: FormaPagamentoENUM;
    public tipoSalario: TipoSalarioENUM;

    constructor() {
        super();
        this.colaborador = new Colaborador();
        this.cargo = new Cargo();
        this.tipoContrato = new TipoContrato();
        this.cargaHoraria = new CargaHoraria();
    }
}