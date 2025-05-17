import {ColumnType} from "@/types/_root/ColumnType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const clienteColunasListagem: ColumnType[] = [
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