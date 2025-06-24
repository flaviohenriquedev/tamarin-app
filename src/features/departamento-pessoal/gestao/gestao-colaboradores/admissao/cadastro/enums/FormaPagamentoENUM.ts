import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum FormaPagamentoENUM {
    MENSAL = "MENSAL",
    SEMANAL = "SEMANAL",
    DIARIO = "DIARIO"
}

export class FormaPagamentoFactory {

    private static readonly formasPagamento: FormaPagamentoENUM[] = [
        FormaPagamentoENUM.MENSAL,
        FormaPagamentoENUM.SEMANAL,
        FormaPagamentoENUM.DIARIO
    ];

    private static readonly infos = {
        MENSAL: {
            label: 'Mensal'
        },
        SEMANAL: {
            label: 'Semanal'
        },
        DIARIO: {
            label: 'Diário'
        }
    };

    static getFormasPagamento(): FormaPagamentoENUM[] {
        return this.formasPagamento;
    }

    static getSelectItens(): TSelectItem[] {
        return this.formasPagamento.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(formaPagamento: FormaPagamentoENUM): string {
        return formaPagamento ? this.infos[formaPagamento].label : '';
    }
}