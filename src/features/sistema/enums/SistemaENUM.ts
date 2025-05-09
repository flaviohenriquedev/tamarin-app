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
            label: 'Recursos Humanos'
        },
        GERENCIAR_SISTEMA: {
            label: 'Gerenciar Sistema'
        },
        CONTABIL: {
            label: 'Gerenciar Contábil'
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
