import {EntidadeTenant} from "@/class/EntidadeTenant";

import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-endereco/ts/ColaboradorEndereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-cargo/ts/ColaboradorCargo";
import {
    StatusColaboradorENUM
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/StatusColaboradorENUM";

export class Colaborador extends EntidadeTenant {
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
