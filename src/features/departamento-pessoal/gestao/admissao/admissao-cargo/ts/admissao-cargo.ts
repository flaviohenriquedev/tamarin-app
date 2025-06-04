import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";

export class AdmissaoCargo {
    public admissao: Admissao;
    public salario: number;
    public dataAdmissao: Date;
    public cargo: Cargo;

    constructor() {
        this.admissao = new Admissao();
        this.cargo = new Cargo();
    }
}