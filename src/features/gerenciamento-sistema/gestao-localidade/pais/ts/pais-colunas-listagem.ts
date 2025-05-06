import {ColumnType} from "@/types/_root/ColumnType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const paisColunasListagem: ColumnType[] = [
    {
        descricao: 'Nome',
        field: 'nomePt',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Sigla',
        field: 'sigla',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Bacen',
        field: 'bacen',
        tipoDado: TipoDadoEnum.INTEGER,
    },
    {
        descricao: 'DDI',
        field: 'ddi',
        tipoDado: TipoDadoEnum.INTEGER,
    },
]
