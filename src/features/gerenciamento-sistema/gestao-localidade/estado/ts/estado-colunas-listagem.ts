import {TColuna} from "@/types/TColuna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const estadoColunasListagem: TColuna[] = [
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