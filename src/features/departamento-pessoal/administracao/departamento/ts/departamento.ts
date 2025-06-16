import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Setor} from "@/features/departamento-pessoal/administracao/setores/ts/setor";

export class Departamento extends EntidadeTenant {
    public descricao: string;
    public setores: Setor[];
    constructor() {
        super();
        this.setores = [];
    }
}