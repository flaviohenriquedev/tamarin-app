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
import {EtniaENUM} from "@/features/_root/enums/EtniaENUM";
import {EstadoCivilENUM} from "@/features/_root/enums/EstadoCivilENUM";
import {GeneroENUM} from "@/features/_root/enums/GeneroENUM";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";

export class Colaborador extends EntidadeTenant {
    public matricula: number;
    public nomeCompleto: string;
    public cpf: string;
    public pis: string;
    public dataNascimento: Date;
    public dataExpedicaoRg: Date;
    public cidadeNascimento: Cidade;
    public nascionalidade: string;
    public nomeMae: string;
    public colaboradorEndereco: ColaboradorEndereco;
    public cargoAtivo: ColaboradorCargo;
    public listaColaboradorCargo: ColaboradorCargo[];

    public statusColaborador: StatusColaboradorENUM;
    public etnia: EtniaENUM;
    public estadoCivil: EstadoCivilENUM;
    public genero: GeneroENUM;

    constructor() {
        super();
    }
}
