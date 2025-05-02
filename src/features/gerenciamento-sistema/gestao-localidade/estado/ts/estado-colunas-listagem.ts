import {Coluna} from "@/types/Coluna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const estadoColunasListagem: Coluna[] = [
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