import {Coluna} from "@/sistema/_root/types/root-types";
import {TipoDadoEnum} from "@/sistema/_root/enums/root-enum";

export const usuarioConlunasListagem: Coluna[] = [
    {
        descricao: 'Nome',
        field: 'nome',
        tipoDado: TipoDadoEnum.STRING,
    },
    {
        descricao: 'Email',
        field: 'email',
        tipoDado: TipoDadoEnum.DECIMAL,
    },
    {
        descricao: 'CPF',
        field: 'cpf',
        tipoDado: TipoDadoEnum.STRING,
    },
]