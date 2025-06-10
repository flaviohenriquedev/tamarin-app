import {EntidadeTenant} from "@/class/EntidadeTenant";
import {
    StatusColaboradorENUM
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/status-colaborador-e-n-u-m";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-endereco/ts/colaborador-endereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-cargo/ts/colaborador-cargo";

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
