import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum TrueFalseENUM {
    TRUE = "TRUE",
    FALSE = "FALSE"
}

export class TrueFalseFactory {

    private static readonly valores: TrueFalseENUM[] = [
        TrueFalseENUM.TRUE,
        TrueFalseENUM.FALSE
    ];

    private static readonly infos = {
        TRUE: {
            label: 'Sim'
        },
        FALSE: {
            label: 'Não'
        }
    };

    static getGeneros(): TrueFalseENUM[] {
        return this.valores;
    }

    static getSelectItens(): TSelectItem[] {
        return this.valores.map(item => {
            return {label: this.getLabel(item), value: this.getBoolean(item)};
        });
    }

    static getLabel(valor: TrueFalseENUM): string {
        return valor ? this.infos[valor].label : '';
    }

    private static getBoolean(valor: TrueFalseENUM): boolean {
        return valor === TrueFalseENUM.TRUE;
    }
}