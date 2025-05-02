import {SelectItem} from "@/interface/SelectItem";

export enum StatusColaborador {
    ATIVO = "ATIVO",
    FERIAS = "FERIAS",
    AFASTADO = "AFASTADO",
    DESLIGADO = "DESLIGADO"
}

export class StatusColaboradorFactory {

    private static readonly status: StatusColaborador[] = [
        StatusColaborador.ATIVO,
        StatusColaborador.FERIAS,
        StatusColaborador.AFASTADO,
        StatusColaborador.DESLIGADO
    ];

    private static readonly infos = {
        ATIVO: {
            label: 'Ativo',
            bg: 'bg-[#41C227]',
            borderColor: 'border-[#41C227]'
        },
        FERIAS: {
            label: 'Férias',
            bg: 'bg-[#27ABC2]',
            borderColor: 'border-[#27ABC2]'

        },
        AFASTADO: {
            label: 'Afastado',
            bg: 'bg-[#E6A10B]',
            borderColor: 'border-[#E6A10B]'
        },
        DESLIGADO: {
            label: 'Desligado',
            bg: 'bg-[#D42C2C]',
            borderColor: 'border-[#D42C2C]'
        }
    };

    static getStatus(): StatusColaborador[] {
        return this.status;
    }

    static getSelectItens(): SelectItem[] {
        return this.status.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(status: StatusColaborador): string {
        return status ? this.infos[status].label : '';
    }

    static getItemByInfo(info: string): SelectItem | undefined {
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

    static getInfo(status: StatusColaborador) {
        return this.infos[status]
    }
}
