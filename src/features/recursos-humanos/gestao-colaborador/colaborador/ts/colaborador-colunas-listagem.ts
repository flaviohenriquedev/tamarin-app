import {TColuna} from "@/types/_root/TColuna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const colaboradorConlunasListagem: TColuna[] = [
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
