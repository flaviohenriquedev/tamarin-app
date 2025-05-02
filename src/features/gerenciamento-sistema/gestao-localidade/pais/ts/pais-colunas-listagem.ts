import {Coluna} from "@/types/Coluna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const paisColunasListagem: Coluna[] = [
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
