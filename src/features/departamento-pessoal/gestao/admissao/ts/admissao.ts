import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";
import {CargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";

export class Admissao extends EntidadeTenant {
    public nomeCompleto: string;
    public cpf: string;
    public rg: string;
    public dataNascimento: Date;
    public nascionalidade: string;
    public nomeMae: string;

    public rua: string;
    public quadra: string;
    public lote: string;
    public numero: string;
    public bairro: string;
    public cidade: Cidade;

    public salario: number;
    public dataAdmissao: Date;
    public cargo: Cargo;
    public tipoContrato: TipoContrato;
    public cargaHoraria: CargaHoraria;
    public departamento: Departamento;

    public quantidadeDiasExperiencia: number;
    public dataExperiencia: Date;
    public quantidadeDiasProrrogacao: number;
    public dataProrrogacao: Date;

    constructor() {
        super();
    }
}