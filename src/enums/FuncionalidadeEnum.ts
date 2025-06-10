import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum FuncionalidadeEnum {
    SOMENTE_LEITURA = "SOMENTE_LEITURA",
    MANIPULAR_CADASTRO = "MANIPULAR_CADASTRO",
    CONSULTAR_TESTE = "CONSULTAR_TESTE"
}

export type FuncionalidadeInfo = {
    label: string;
    isFuncionalidadePadrao?: boolean;
    styleClass?: string
}

export class FuncionalidadeFactory {

    private static readonly funcionalidade: FuncionalidadeEnum[] = [
        FuncionalidadeEnum.SOMENTE_LEITURA,
        FuncionalidadeEnum.MANIPULAR_CADASTRO,
        FuncionalidadeEnum.CONSULTAR_TESTE
    ];

    private static readonly infos: {[key in FuncionalidadeEnum]: FuncionalidadeInfo} = {
        SOMENTE_LEITURA: {
            label: 'Somente Leitura',
            isFuncionalidadePadrao: true
        },
        MANIPULAR_CADASTRO: {
            label: 'Manipular Cadastro',
            isFuncionalidadePadrao: true
        },
        CONSULTAR_TESTE: {
            label: 'Teste',
        }
    };

    static funcionalidadesPadrao() {
        return [
            FuncionalidadeEnum.SOMENTE_LEITURA,
            FuncionalidadeEnum.MANIPULAR_CADASTRO
        ];
    }

    static getFuncionalidades(funcionalidades: FuncionalidadeEnum[]): Partial<Record<FuncionalidadeEnum, FuncionalidadeInfo>> {
        const map: Partial<Record<FuncionalidadeEnum, FuncionalidadeInfo>> = {};
         Object.values(funcionalidades).forEach(f => {
            const info = this.get(f);
            if (info) {
                map[f] = info;
            }
        });
        return map;
    }

    static get(funcionalidade: FuncionalidadeEnum) {
        return this.infos[funcionalidade];
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
        return funcionalidade && this.infos[funcionalidade] ? this.infos[funcionalidade].label : '';
    }

    static getStyleClass(funcionalidade: FuncionalidadeEnum): string {
        if (this.infos[funcionalidade]) {
            const sc: string | undefined = this.infos[funcionalidade].styleClass
            return funcionalidade && sc ? sc : '';
        }
        return ''
    }

    static getItemByInfo(info: string): TSelectItem | undefined {
        const status = this.funcionalidade.find(item => item === info);

        if (status && this.infos[status]) {
            return {
                label: this.infos[status].label,
                value: info
            };
        } else {
            return undefined;
        }
    }

    private static getInfo(funcionalidadeEnum: FuncionalidadeEnum) {
        return this.infos[funcionalidadeEnum];
    }
}
