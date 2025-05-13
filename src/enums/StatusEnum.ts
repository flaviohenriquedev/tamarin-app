import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum Status {
    INATIVO = "INATIVO",
    ATIVO = "ATIVO",
    DELETADO = "DELETADO"
}

export class StatusFactory {
    private static readonly status: Status[] = [
        Status.INATIVO,
        Status.ATIVO,
        Status.DELETADO
    ];

    private static readonly infos = {
        INATIVO: {
            label: 'Inativo'
        },
        ATIVO: {
            label: 'Ativo'
        },
        DELETADO: {
            label: 'Deletado'
        }
    };

    static getStatus(): Status[] {
        return this.status;
    }

    static getSelectItens(): TSelectItem[] {
        return this.status.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(status: Status): string {
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
