import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum ModuloENUM {
    COLABORADOR = "COLABORADOR",
    FOLHA_PAGAMENTO = "FOLHA_PAGAMENTO",
    FOLHA_PAGAMENTO_LANCAMENTOS = "FOLHA_PAGAMENTO_LANCAMENTOS",
    FOLHA_PAGAMENTO_EVENTOS = "FOLHA_PAGAMENTO_EVENTOS",
    REGISTRO_DE_PONTO = "REGISTRO_DE_PONTO"
}

export class ModuloFactory {

    private static readonly modulos: ModuloENUM[] = [
        ModuloENUM.COLABORADOR,
        ModuloENUM.FOLHA_PAGAMENTO,
        ModuloENUM.FOLHA_PAGAMENTO_LANCAMENTOS,
        ModuloENUM.FOLHA_PAGAMENTO_EVENTOS,
        ModuloENUM.REGISTRO_DE_PONTO,
    ];

    private static readonly infos = {
        COLABORADOR: {
            label: "Colaborador",
        },
        FOLHA_PAGAMENTO: {
            label: 'Folha de Pagamento'
        },
        FOLHA_PAGAMENTO_LANCAMENTOS: {
            label: 'Lançamentos'
        },
        FOLHA_PAGAMENTO_EVENTOS: {
            label: 'Eventos'
        },
        REGISTRO_DE_PONTO: {
            label: 'Registro de Ponto'
        }
    };

    static getModulos(): ModuloENUM[] {
        return this.modulos;
    }

    static getSelectItens(): TSelectItem[] {
        return this.modulos.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(modulo: ModuloENUM): string {
        return modulo ? this.infos[modulo].label : '';
    }

    static getItemByInfo(info: string): TSelectItem | undefined {
        const status = this.modulos.find(item => item === info);

        if (status) {
            return {
                label: this.infos[status].label,
                value: info
            };
        } else {
            return undefined;
        }
    }
}
