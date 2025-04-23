import {Coluna} from "@/sistema/_root/types/root-types";
import {TipoDadoEnum} from "@/sistema/_root/enums/root-enum";

export const departamentoColunasListagem: Coluna[] = [
    {
        descricao: 'Descrição',
        field: 'descricao',
        tipoDado: TipoDadoEnum.STRING,
    },
]
