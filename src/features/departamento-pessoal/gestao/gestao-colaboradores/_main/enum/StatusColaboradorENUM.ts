import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum StatusColaboradorENUM {
    ATIVO = "ATIVO",
    FERIAS = "FERIAS",
    AFASTADO = "AFASTADO",
    DESLIGADO = "DESLIGADO"
}

export class StatusColaboradorFactory {

    private static readonly status: StatusColaboradorENUM[] = [
        StatusColaboradorENUM.ATIVO,
        StatusColaboradorENUM.FERIAS,
        StatusColaboradorENUM.AFASTADO,
        StatusColaboradorENUM.DESLIGADO
    ];

    private static readonly infos = {
        ATIVO: {
            label: 'Ativo',
            bg: 'bg-success text-success-content',
            borderColor: 'border-[#41C227]',
            textColor: 'text-[#41C227]'
        },
        FERIAS: {
            label: 'Férias',
            bg: 'bg-[#27ABC2]',
            borderColor: 'border-[#27ABC2]',
            textColor: 'text-[#27ABC2]'

        },
        AFASTADO: {
            label: 'Afastado',
            bg: 'bg-[#E6A10B]',
            borderColor: 'border-[#E6A10B]',
            textColor: 'text-[#E6A10B]'
        },
        DESLIGADO: {
            label: 'Desligado',
            bg: 'bg-[#D42C2C]',
            borderColor: 'border-[#D42C2C]',
            textColor: 'text-[#D42C2C]'
        }
    };

    static getStatus(): StatusColaboradorENUM[] {
        return this.status;
    }

    static getSelectItens(): TSelectItem[] {
        return this.status.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(status: StatusColaboradorENUM): string {
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

    static getInfo(status: StatusColaboradorENUM) {
        return this.infos[status]
    }
}
