import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const admissaoColunasListagem: ColunaType[] = [
    {
        descricao: 'Colaborador',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Matricula',
        field: 'colaborador.matricula',
        tipoDado: TipoDadoEnum.INTEGER,
    },
    {
        descricao: 'CPF',
        field: 'cpf',
        tipoDado: TipoDadoEnum.CPF,
    },
    {
        descricao: 'RG',
        field: 'rg',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Data Admissão',
        field: 'cargoAtivo.dataAdmissao',
        tipoDado: TipoDadoEnum.DATA_COMPLETA,
    },
    {
        descricao: 'Cargo',
        field: 'cargoAtivo.cargo.descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Tipo Contrato',
        field: 'cargoAtivo.tipoContrato.descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Departamento',
        field: 'cargoAtivo.departamento.descricao',
        tipoDado: TipoDadoEnum.STRING,
    },

]