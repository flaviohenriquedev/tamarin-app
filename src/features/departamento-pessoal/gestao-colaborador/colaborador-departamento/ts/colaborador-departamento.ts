import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";

export class ColaboradorDepartamento {
    public colaborador: Colaborador;
    public departamento: Departamento

    constructor() {
        this.colaborador = new Colaborador();
        this.departamento = new Departamento();
    }
}