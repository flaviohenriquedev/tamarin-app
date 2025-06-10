import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const empresaColunasListagem: ColunaType[] = [
    {
        descricao: 'Nome Fantasia',
        field: 'nomeFantasia'
    },
    {
        descricao: 'Razão Social',
        field: 'razaoSocial'
    },
    {
        descricao: 'CNPJ',
        field: 'cnpj',
        tipoDado: TipoDadoEnum.CNPJ
    },
    {
        descricao: 'Data de Abertura',
        field: 'dataAbertura',
        tipoDado: TipoDadoEnum.DATA_COMPLETA,
    },
]