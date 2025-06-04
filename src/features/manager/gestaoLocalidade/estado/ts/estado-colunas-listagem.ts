import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const estadoColunasListagem: ColunaType[] = [
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