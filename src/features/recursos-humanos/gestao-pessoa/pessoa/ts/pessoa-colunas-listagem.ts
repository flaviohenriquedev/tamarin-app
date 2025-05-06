import {ColumnType} from "@/types/_root/ColumnType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const pessoaColunasListagem: ColumnType[] = [
    {
        descricao: 'Nome',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
]
