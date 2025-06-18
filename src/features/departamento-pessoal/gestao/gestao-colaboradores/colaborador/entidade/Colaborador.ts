import {EntidadeTenant} from "@/class/EntidadeTenant";
import {
    StatusColaboradorENUM
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/enum/StatusColaboradorENUM";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/ColaboradorEndereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/ColaboradorCargo";

export class Colaborador extends EntidadeTenant {
    public matricula: number;
    public nomeCompleto: string;
    public cpf: string;
    public dataNascimento: Date;
    public nascionalidade: string;
    public nomeMae: string;
    public statusColaborador: StatusColaboradorENUM;
    public colaboradorEndereco: ColaboradorEndereco;
    public cargoAtivo: ColaboradorCargo;
    public listaColaboradorCargo: ColaboradorCargo[];

    constructor() {
        super();
    }
}
