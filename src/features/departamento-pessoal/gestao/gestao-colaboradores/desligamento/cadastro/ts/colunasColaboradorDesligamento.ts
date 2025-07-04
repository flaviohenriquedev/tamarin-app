import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const colunasColaboradorDesligamento: ColunaType[] = [
    {
        descricao: 'Colaborador',
        field: 'colaborador.nomeCompleto'
    },
    {
        descricao: 'Data de Desligamento',
        field: 'dataDesligamento',
        tipoDado: TipoDadoEnum.DATA_COMPLETA
    }
]