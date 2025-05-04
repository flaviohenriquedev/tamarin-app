import {TColuna} from "@/types/TColuna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const pessoaColunasListagem: TColuna[] = [
    {
        descricao: 'Nome',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
]
