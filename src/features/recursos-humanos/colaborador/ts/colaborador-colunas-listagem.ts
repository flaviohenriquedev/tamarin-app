import {Coluna} from "@/sistema/_root/types/root-types";
import {TipoDadoEnum} from "@/sistema/_root/enums/root-enum";

export const colaboradorConlunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'CPF',
        field: 'cpf',
        tipoDado: TipoDadoEnum.DECIMAL,
    },
    {
        descricao: 'Data de Nascimento',
        field: 'dataNascimento',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Email',
        field: 'email',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Telefone',
        field: 'telefone',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Cargo',
        field: 'cargo',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Departamento',
        field: 'departamento',
        tipoDado: TipoDadoEnum.STRING,
    }
]
