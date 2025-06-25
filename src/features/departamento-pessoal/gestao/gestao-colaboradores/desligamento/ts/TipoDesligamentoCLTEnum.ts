import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {EnumInfos} from "@/types/_root/EnumInfos";
import {EnumFactory} from "@/interfaces/EnumFactory";

export enum TipoDesligamentoCLTEnum {
    DEMISSAO_SEM_JUSTA_CAUSA_PELO_EMPREGADOR = "DEMISSAO_SEM_JUSTA_CAUSA_PELO_EMPREGADOR",
    DEMISSAO_COM_JUSTA_CAUSA_PELO_EMPREGADOR = "DEMISSAO_COM_JUSTA_CAUSA_PELO_EMPREGADOR",
    PEDIDO_DE_DEMISSAO_PELO_EMPREGADO = "PEDIDO_DE_DEMISSAO_PELO_EMPREGADO",
    ACORDO_RESCISAO = "ACORDO_RESCISAO",
    TERMINO_CONTRATO_PRAZO_DETERMINADO = "TERMINO_CONTRATO_PRAZO_DETERMINADO",
    RESCISAO_INDIRETA = "RESCISAO_INDIRETA",
    MORTE_EMPREGADO = "MORTE_EMPREGADO",
    APOSENTADORIA = "APOSENTADORIA",
    FORCA_MAIOR = "FORCA_MAIOR",
    CULPA_RECIPROCA = "CULPA_RECIPROCA",
    EXTINCAO_EMPRESA = "EXTINCAO_EMPRESA",
    JUSTICA_TRABALHISTA_SENTENCA = "JUSTICA_TRABALHISTA_SENTENCA"
}

export class TipoDesligamentoCLTFactory implements EnumFactory<typeof TipoDesligamentoCLTEnum> {

    getLabel(item: TipoDesligamentoCLTEnum): string {
        return this.infos()[item].label;
    }

    enums(): TipoDesligamentoCLTEnum[] {
        return Object.values(TipoDesligamentoCLTEnum)
    }

    infos(): { [k in TipoDesligamentoCLTEnum]: EnumInfos } {
        return {
            [TipoDesligamentoCLTEnum.DEMISSAO_SEM_JUSTA_CAUSA_PELO_EMPREGADOR]: {
                label: "Demissão sem justa causa pelo empregador"
            },
            [TipoDesligamentoCLTEnum.DEMISSAO_COM_JUSTA_CAUSA_PELO_EMPREGADOR]: {
                label: "Demissão com justa causa pelo empregador"
            },
            [TipoDesligamentoCLTEnum.PEDIDO_DE_DEMISSAO_PELO_EMPREGADO]: {
                label: "Pedido de demissão pelo empregado"
            },
            [TipoDesligamentoCLTEnum.ACORDO_RESCISAO]: {
                label: "Acordo entre empregado e empregador"
            },
            [TipoDesligamentoCLTEnum.TERMINO_CONTRATO_PRAZO_DETERMINADO]: {
                label: "Término de contrato por prazo determinado"
            },
            [TipoDesligamentoCLTEnum.RESCISAO_INDIRETA]: {
                label: "Rescisão indireta (falta grave do empregador)"
            },
            [TipoDesligamentoCLTEnum.MORTE_EMPREGADO]: {
                label: "Morte do empregado"
            },
            [TipoDesligamentoCLTEnum.APOSENTADORIA]: {
                label: "Aposentadoria"
            },
            [TipoDesligamentoCLTEnum.FORCA_MAIOR]: {
                label: "Extinção do contrato por força maior"
            },
            [TipoDesligamentoCLTEnum.CULPA_RECIPROCA]: {
                label: "Rescisão por culpa recíproca"
            },
            [TipoDesligamentoCLTEnum.EXTINCAO_EMPRESA]: {
                label: "Extinção da empresa"
            },
            [TipoDesligamentoCLTEnum.JUSTICA_TRABALHISTA_SENTENCA]: {
                label: "Rescisão por decisão judicial"
            },
        };
    }

    getSelectItens(): TSelectItem[] {
        return this.enums().map((item) => {
            return {
                label: this.getLabel(item),
                value: item
            }
        })
    }
}
