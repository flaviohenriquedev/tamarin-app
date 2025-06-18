import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum SistemaENUM {
    RECURSOS_HUMANOS = 'RECURSOS_HUMANOS',
    DEPARTAMENTO_PESSOAL = 'DEPARTAMENTO_PESSOAL',
    GERENCIAR_SISTEMA = 'GERENCIAR_SISTEMA',
    CONTABIL = 'CONTABIL'
}

export class SistemaENUMFactory {

    private static readonly sistema: SistemaENUM[] = [
        SistemaENUM.RECURSOS_HUMANOS,
        SistemaENUM.DEPARTAMENTO_PESSOAL,
        SistemaENUM.GERENCIAR_SISTEMA,
        SistemaENUM.CONTABIL,
    ];

    private static readonly infos = {
        RECURSOS_HUMANOS: {
            label: 'RH',
            descricao: 'Recursos Humanos',
        },
        DEPARTAMENTO_PESSOAL: {
            label: 'DP',
            descricao: 'Departamento Pessoal',
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

    static getSistema(): SistemaENUM[] {
        return this.sistema;
    }

    static getSelectItens(): TSelectItem[] {
        return this.sistema.map(item => {
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
        const status = this.sistema.find(item => item === info);

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
