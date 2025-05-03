import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum RoleUsuarioENUM {
    MASTER = "MASTER",
    ADMIN = "ADMIN",
    USER = "USER"
}

export class RoleUsuarioFactory {

    private static readonly status: RoleUsuarioENUM[] = [
        RoleUsuarioENUM.MASTER,
        RoleUsuarioENUM.ADMIN,
        RoleUsuarioENUM.USER
    ];

    private static readonly infos = {
        MASTER: {
            label: 'Master'
        },
        ADMIN: {
            label: 'Administrador'
        },
        USER: {
            label: 'Usuário'
        }
    };

    static getStatus(): RoleUsuarioENUM[] {
        return this.status;
    }

    static getSelectItens(): TSelectItem[] {
        return this.status.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getLabel(status: RoleUsuarioENUM): string {
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
