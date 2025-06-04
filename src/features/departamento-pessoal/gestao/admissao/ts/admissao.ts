import {EntidadeCliente} from "@/class/EntidadeCliente";
import {AdmissaoEndereco} from "@/features/departamento-pessoal/gestao/admissao/admissao-endereco/ts/admissao-endereco";
import {
    AdmissaoDepartamento
} from "@/features/departamento-pessoal/gestao/admissao/admissao-departamento/ts/admissao-departamento";
import {AdmissaoCargo} from "@/features/departamento-pessoal/gestao/admissao/admissao-cargo/ts/admissao-cargo";

export class Admissao extends EntidadeCliente {
    public nomeCompleto: string;
    public cpf: string;
    public dataNascimento: Date;
    public nascionalidade: string;
    public nomeMae: string;

    public admissaoEndereco: AdmissaoEndereco;
    public admissaoDepartamento: AdmissaoDepartamento;
    public admissaoCargo: AdmissaoCargo;

    constructor() {
        super();
    }
}