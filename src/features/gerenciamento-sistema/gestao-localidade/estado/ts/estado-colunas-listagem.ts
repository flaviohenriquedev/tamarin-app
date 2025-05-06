import {ColumnType} from "@/types/_root/ColumnType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const estadoColunasListagem: ColumnType[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Sigla',
        field: 'sigla',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Código IBGE',
        field: 'ibge',
        tipoDado: TipoDadoEnum.INTEGER,
    }
]