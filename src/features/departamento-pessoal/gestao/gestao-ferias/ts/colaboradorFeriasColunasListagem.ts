import {ColunaType} from "@/types/_root/ColunaType";
import {TipoDadoEnum} from "@/enums/TipoDadoEnum";

export const colaboradorFeriasColunasListagem: ColunaType[] = [
    {
        descricao: 'Colaborador',
        field: 'colaborador.nomeCompleto',
    },
    {
        descricao: 'Periodo Inicial',
        field: 'periodoInicial',
        tipoDado: TipoDadoEnum.DATA_COMPLETA
    },
    {
        descricao: 'Periodo Final',
        field: 'periodoFinal',
        tipoDado: TipoDadoEnum.DATA_COMPLETA
    }
]