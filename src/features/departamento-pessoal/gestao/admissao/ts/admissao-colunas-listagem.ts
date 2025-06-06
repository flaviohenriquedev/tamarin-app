import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const admissaoColunasListagem: ColunaType[] = [
    {
        descricao: 'Colaborador',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'CPF',
        field: 'cpf',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Data Admissão',
        field: 'dataAdmissao',
        tipoDado: TipoDadoEnum.DATA_COMPLETA,
    },
    {
        descricao: 'Cargo',
        field: 'cargo.descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Tipo Contrato',
        field: 'tipoContrato.descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Departamento',
        field: 'departamento.descricao',
        tipoDado: TipoDadoEnum.STRING,
    },

]