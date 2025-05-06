import {ColumnType} from "@/types/_root/ColumnType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const usuarioColunasListagem: ColumnType[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    }
]
