import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum FuncionalidadeEnum {
    SOMENTE_LEITURA = "SOMENTE_LEITURA",
    EDITAR = "EDITAR",
}

export class FuncionalidadeEnumFactory {

    private static readonly funcionalidade: FuncionalidadeEnum[] = [
        FuncionalidadeEnum.SOMENTE_LEITURA,
        FuncionalidadeEnum.EDITAR
    ];

    private static readonly infos = {
        SOMENTE_LEITURA: {
            label: 'Somente Leitura',
            styleClass: 'text-info'
        },
        EDITAR: {
            label: 'Editar',
            styleClass: 'text-warning'
        }
    };

    private static readonly funcionalidadesPadrao = {
        SOMENTE_LEITURA: {
            label: "Somente Leitura",
        },
        MANIPULAR_CADASTRO: {
            label: 'Manipular Cadastro'
        },
    };


    static getFuncionalidade(): FuncionalidadeEnum[] {
        return this.funcionalidade;
    }

    static getFuncionalidadesPadrao() {
        return this.funcionalidadesPadrao;
    }

    static getSelectItens(): TSelectItem[] {
        return this.funcionalidade.map(item => {
            return {
                label: this.getLabel(item),
                value: item,
                styleClass: this.getStyleClass(item)
            };
        });
    }

    static getLabel(funcionalidade: FuncionalidadeEnum): string {
        return funcionalidade ? this.infos[funcionalidade].label : '';
    }

    static getStyleClass(funcionalidade: FuncionalidadeEnum): string {
        return funcionalidade ? this.infos[funcionalidade].styleClass : '';
    }

    static getItemByInfo(info: string): TSelectItem | undefined {
        const status = this.funcionalidade.find(item => item === info);

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
