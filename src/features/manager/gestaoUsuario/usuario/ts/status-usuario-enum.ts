import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum StatusUsuarioENUM {
    ATIVO = "ATIVO",
    INATIVO = "INATIVO",
    PENDENTE = "PENDENTE"
}

export class StatusUsuarioFactory {

    private static readonly status: StatusUsuarioENUM[] = [
        StatusUsuarioENUM.ATIVO,
        StatusUsuarioENUM.INATIVO,
        StatusUsuarioENUM.PENDENTE
    ];

    private static readonly infos = {
        ATIVO: {
            label: 'Ativo',
        },
        INATIVO: {
            label: 'Inativo',
        },
        PENDENTE: {
            label: 'Pendente'
        }
    };

    static getStatus(): StatusUsuarioENUM[] {
        return this.status;
    }

    static getSelectItens(): TSelectItem[] {
        return this.status.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(status: StatusUsuarioENUM): string {
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

    static getInfo(status: StatusUsuarioENUM) {
        return this.infos[status]
    }
}
