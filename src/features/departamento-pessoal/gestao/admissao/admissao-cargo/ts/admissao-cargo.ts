import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";
import {CargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria";

export class AdmissaoCargo {
    public admissao: Admissao;
    public salario: number;
    public dataAdmissao: Date;
    public cargo: Cargo;
    public tipoContrato: TipoContrato;
    public cargaHoraria: CargaHoraria;

    constructor() {
        this.admissao = new Admissao();
        this.cargo = new Cargo();
        this.tipoContrato = new TipoContrato();
        this.cargaHoraria = new CargaHoraria();
    }
}