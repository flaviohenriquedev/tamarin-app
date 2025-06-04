import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const colunasColaborador: ColunaType[] = [
    {
        descricao: 'Nome',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'CPF',
        field: 'cpf',
        tipoDado: TipoDadoEnum.CPF,
    },
    {
        descricao: 'Data de Nascimento',
        field: 'dataNascimento',
        tipoDado: TipoDadoEnum.DATA_COMPLETA,
    },
    {
        descricao: 'Email',
        field: 'email',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Telefone',
        field: 'telefone',
        tipoDado: TipoDadoEnum.TELEFONE,
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
