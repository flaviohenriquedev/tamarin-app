import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";

export class ColaboradorDepartamento {
    public colaborador: Colaborador;
    public departamento: Departamento

    constructor() {
        this.colaborador = new Colaborador();
        this.departamento = new Departamento();
    }
}