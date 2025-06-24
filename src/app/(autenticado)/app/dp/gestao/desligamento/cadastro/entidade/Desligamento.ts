import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";

export class Desligamento extends EntidadeTenant {
    public colaborador: Colaborador

    constructor() {
        super();
    }
}