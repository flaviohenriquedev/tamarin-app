import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";

export class ColaboradorAfastamento extends EntidadeTenant {
    public colaborador: Colaborador;
    public dataAfastamento: Date;

    constructor() {
        super();
    }
}