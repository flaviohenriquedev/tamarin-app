import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const colaboradorAfastamentoColunas: ColunaType[] = [
    {
        descricao: 'Colaborador',
        field: 'colaborador.nomeCompleto',
    },
    {
        descricao: 'Data Afastamento',
        field: 'dataAfastamento',
        tipoDado: TipoDadoEnum.DATA_COMPLETA
    }
]