import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum EstadoCivilENUM {
    SOLTEIRO = "SOLTEIRO",
    CASADO = "CASADO",
    DIVORCIADO = "DIVORCIADO",
    VIUVO = "VIUVO",
    SEPARADO = "SEPARADO"
}

export class EstadoCivilFactory {

    private static readonly estadosCivis: EstadoCivilENUM[] = [
        EstadoCivilENUM.SOLTEIRO,
        EstadoCivilENUM.CASADO,
        EstadoCivilENUM.DIVORCIADO,
        EstadoCivilENUM.VIUVO,
        EstadoCivilENUM.SEPARADO
    ];

    private static readonly infos = {
        SOLTEIRO: {
            label: 'Solteiro(a)'
        },
        CASADO: {
            label: 'Casado(a)'
        },
        DIVORCIADO: {
            label: 'Divorciado(a)'
        },
        VIUVO: {
            label: 'Viúvo(a)'
        },
        SEPARADO: {
            label: 'Separado(a)'
        }
    };

    static getEstadosCivis(): EstadoCivilENUM[] {
        return this.estadosCivis;
    }

    static getSelectItens(): TSelectItem[] {
        return this.estadosCivis.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(estadoCivil: EstadoCivilENUM): string {
        return estadoCivil ? this.infos[estadoCivil].label : '';
    }
}