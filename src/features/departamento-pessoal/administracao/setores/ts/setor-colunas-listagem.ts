import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const setorColunasListagem: ColunaType[] = [
    {
        descricao: 'Descrição',
        field: 'descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Departamento',
        field: 'departamento.descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
]
