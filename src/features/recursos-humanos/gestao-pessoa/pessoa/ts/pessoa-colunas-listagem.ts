import {Coluna} from "@/sistema/_root/types/root-types";
import {TipoDadoEnum} from "@/sistema/_root/enums/root-enum";

export const pessoaColunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
]
