import {Coluna} from "@/types/Coluna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const clienteColunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    },
]
