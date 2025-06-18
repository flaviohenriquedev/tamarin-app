import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum EtniaENUM {
    BRANCA = "BRANCA",
    PRETA = "PRETA",
    PARDA = "PARDA",
    AMARELA = "AMARELA",
    INDIGENA = "INDIGENA"
}

export class EtniaFactory {

    private static readonly etnias: EtniaENUM[] = [
        EtniaENUM.BRANCA,
        EtniaENUM.PRETA,
        EtniaENUM.PARDA,
        EtniaENUM.AMARELA,
        EtniaENUM.INDIGENA
    ];

    private static readonly infos = {
        BRANCA: {
            label: 'Branca'
        },
        PRETA: {
            label: 'Preta'
        },
        PARDA: {
            label: 'Parda'
        },
        AMARELA: {
            label: 'Amarela'
        },
        INDIGENA: {
            label: 'Indigena'
        }
    };

    static getEtnias(): EtniaENUM[] {
        return this.etnias;
    }

    static getSelectItens(): TSelectItem[] {
        return this.etnias.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(etnia: EtniaENUM): string {
        return etnia ? this.infos[etnia].label : '';
    }
}