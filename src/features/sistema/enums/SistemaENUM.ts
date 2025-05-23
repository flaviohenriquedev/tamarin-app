import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum SistemaENUM {
    RECURSOS_HUMANOS = 'RECURSOS_HUMANOS',
    GERENCIAR_SISTEMA = 'GERENCIAR_SISTEMA',
    CONTABIL = 'CONTABIL'
}

export class SistemaENUMFactory {

    private static readonly status: SistemaENUM[] = [
        SistemaENUM.RECURSOS_HUMANOS,
        SistemaENUM.GERENCIAR_SISTEMA,
        SistemaENUM.CONTABIL,
    ];

    private static readonly infos = {
        RECURSOS_HUMANOS: {
            label: 'RH',
            descricao: 'Recursos Humanos',
        },
        GERENCIAR_SISTEMA: {
            label: 'Sistema',
            descricao: 'Gerenciamento do Sistema'
        },
        CONTABIL: {
            label: 'Contábil',
            descricao: 'Gestão Contábil'
        }
    };

    static getStatus(): SistemaENUM[] {
        return this.status;
    }

    static getSelectItens(): TSelectItem[] {
        return this.status.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(status: SistemaENUM): string {
        return status ? this.infos[status].label : '';
    }

    static getDescricao(status: SistemaENUM): string {
        return status ? this.infos[status].descricao : '';
    }

    static getItemByInfo(info: string): TSelectItem | undefined {
        const status = this.status.find(item => item === info);

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
