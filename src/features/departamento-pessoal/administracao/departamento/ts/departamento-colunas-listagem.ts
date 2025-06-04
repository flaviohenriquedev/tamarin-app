import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const departamentoColunasListagem: ColunaType[] = [
    {
        descricao: 'Descrição',
        field: 'descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
]
