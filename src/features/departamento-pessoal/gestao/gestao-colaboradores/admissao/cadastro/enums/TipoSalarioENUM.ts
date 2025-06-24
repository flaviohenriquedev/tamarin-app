import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum TipoSalarioENUM {
    MENSALISTA = "MENSALISTA",
    HORISTA = "HORISTA",
    DIARIA = "DIARIA"
}

export class TipoSalarioFactory {

    private static readonly tiposSalario: TipoSalarioENUM[] = [
        TipoSalarioENUM.MENSALISTA,
        TipoSalarioENUM.HORISTA,
        TipoSalarioENUM.DIARIA
    ];

    private static readonly infos = {
        MENSALISTA: {
            label: 'Mensalista'
        },
        HORISTA: {
            label: 'Horista'
        },
        DIARIA: {
            label: 'Diária'
        }
    };

    static getTiposSalario(): TipoSalarioENUM[] {
        return this.tiposSalario;
    }

    static getSelectItens(): TSelectItem[] {
        return this.tiposSalario.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(tipoSalario: TipoSalarioENUM): string {
        return tipoSalario ? this.infos[tipoSalario].label : '';
    }
}