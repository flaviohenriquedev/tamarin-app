import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const cidadeColunasListagem: ColunaType[] = [
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
    {
        descricao: 'Lat Tom',
        field: 'latTom',
        tipoDado: TipoDadoEnum.STRING,
    },
]