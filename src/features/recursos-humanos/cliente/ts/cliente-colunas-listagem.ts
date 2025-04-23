import {Coluna} from "@/sistema/_root/types/root-types";
import {TipoDadoEnum} from "@/sistema/_root/enums/root-enum";

export const clienteColunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    },
]
