import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";
import {CargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {EntidadePadrao} from "@/class/EntidadePadrao";

export class ColaboradorCargo extends EntidadePadrao {
    public colaborador: Colaborador;
    public dataAdmissao: Date;
    public vigenciaInicial: Date;
    public vigenciaFinal: Date;
    public salario: number;
    public cargo: Cargo;
    public tipoContrato: TipoContrato;
    public cargaHoraria: CargaHoraria;
    public departamento: Departamento;

    public quantidadeDiasExperiencia: number;
    public dataExperiencia: Date;
    public quantidadeDiasProrrogacao: number;
    public dataProrrogacao: Date;

    constructor() {
        super();
        this.colaborador = new Colaborador();
        this.cargo = new Cargo();
        this.tipoContrato = new TipoContrato();
        this.cargaHoraria = new CargaHoraria();
    }
}