import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";

export class Setor extends EntidadeTenant {
    public departamento: Departamento;
    public descricao: string;

    constructor() {
        super();
        this.departamento = new Departamento();
    }
}