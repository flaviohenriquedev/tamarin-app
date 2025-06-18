import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum GeneroENUM {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO"
}

export class GeneroFactory {

    private static readonly generos: GeneroENUM[] = [
        GeneroENUM.MASCULINO,
        GeneroENUM.FEMININO
    ];

    private static readonly infos = {
        MASCULINO: {
            label: 'Masculino'
        },
        FEMININO: {
            label: 'Feminino'
        }
    };

    static getGeneros(): GeneroENUM[] {
        return this.generos;
    }

    static getSelectItens(): TSelectItem[] {
        return this.generos.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(genero: GeneroENUM): string {
        return genero ? this.infos[genero].label : '';
    }
}