import {Coluna} from "@/types/Coluna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const cidadeColunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Estado',
        field: 'estado.nome',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Código IBGE',
        field: 'ibge',
        tipoDado: TipoDadoEnum.INTEGER,
    },
    {
        descricao: 'Código TOM',
        field: 'codTom',
        tipoDado: TipoDadoEnum.INTEGER,
    },
]