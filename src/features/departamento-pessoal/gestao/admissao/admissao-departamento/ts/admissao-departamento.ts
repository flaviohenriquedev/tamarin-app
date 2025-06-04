import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";

export class AdmissaoDepartamento {
    public admissao: Admissao;
    public departamento: Departamento

    constructor() {
        this.admissao = new Admissao();
        this.departamento = new Departamento();
    }
}