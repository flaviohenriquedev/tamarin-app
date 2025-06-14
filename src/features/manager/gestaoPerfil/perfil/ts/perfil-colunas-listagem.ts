import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const perfilColunasListagem: ColunaType[] = [
    {
        descricao: 'Descrição',
        field: 'descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Cliente',
        field: 'empresa.nomeFantasia',
        tipoDado: TipoDadoEnum.STRING,
    },
]
