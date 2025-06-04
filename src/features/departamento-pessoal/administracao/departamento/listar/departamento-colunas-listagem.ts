import {ColumnType} from "@/types/_root/ColumnType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const departamentoColunasListagem: ColumnType[] = [
    {
        descricao: 'Descrição',
        field: 'descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
]
