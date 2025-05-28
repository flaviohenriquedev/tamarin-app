import {formatDateBR, mascararCNPJ, mascararCPF} from "@/utils/utils";
import {formatPhoneNumber} from 'react-phone-number-input'

export enum TipoDadoEnum {
    STRING = "STRING",
    INTEGER = "INTEGER",
    DECIMAL = 'DECIMAL',
    DATA_COMPLETA = 'DATA_COMPLETA',
    DATA_E_HORA = 'DATA_E_HORA',
    MES_ANO = 'MES_ANO',
    ANO = 'ANO',
    MES = 'MES',
    DIA = 'DIA',
    DIA_DA_SEMANA = '',
    CPF = 'CPF',
    CNPJ = 'CNPJ',
    TELEFONE = 'TELEFONE',
}

type Valores = string | number | Date;

export class MascaraTipoDado {
    static executar(valor: Valores, tipoDado: TipoDadoEnum) {
        switch (tipoDado) {
            case TipoDadoEnum.DATA_COMPLETA: return formatDateBR(valor as Date)
            case TipoDadoEnum.CNPJ: return mascararCNPJ(valor as string)
            case TipoDadoEnum.CPF: return mascararCPF(valor as string)
            case TipoDadoEnum.TELEFONE: return formatPhoneNumber(valor as string)
            default: return valor
        }
    }
}