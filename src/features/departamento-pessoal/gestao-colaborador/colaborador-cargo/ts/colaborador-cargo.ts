import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";
import {CargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/colaborador";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";

export class ColaboradorCargo {
    public colaborador: Colaborador;
    public dataAdmissao: Date;
    public vigenciaInicial: Date;
    public vigenciaFinal: Date;
    public cargo: Cargo;
    public tipoContrato: TipoContrato;
    public cargaHoraria: CargaHoraria;
    public departamento: Departamento;

    constructor() {
        this.colaborador = new Colaborador();
        this.cargo = new Cargo();
        this.tipoContrato = new TipoContrato();
        this.cargaHoraria = new CargaHoraria();
    }
}