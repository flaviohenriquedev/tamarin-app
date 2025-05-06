import {TColuna} from "@/types/_root/TColuna";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const pessoaColunasListagem: TColuna[] = [
    {
        descricao: 'Nome',
        field: 'nomeCompleto',
        tipoDado: TipoDadoEnum.STRING,
    },
]
