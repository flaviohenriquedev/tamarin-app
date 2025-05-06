import {TColuna} from "@/types/_root/TColuna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const paisColunasListagem: TColuna[] = [
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
