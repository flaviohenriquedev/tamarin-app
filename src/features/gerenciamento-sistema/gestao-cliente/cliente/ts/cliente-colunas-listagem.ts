import {ColumnType} from "@/types/_root/ColumnType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const clienteColunasListagem: ColumnType[] = [
    {
        descricao: 'Nome Fantasia',
        field: 'nomeFantasia',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Razão Social',
        field: 'razaoSocial',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'CNPJ',
        field: 'cnpj',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Data de Abertura',
        field: 'dataAbertura',
        tipoDado: TipoDadoEnum.DATE,
    },
]