import {FuncionalidadesType, ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'LANCAMENTOS'

export const ModuloLancamentos: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'lancamentos',
            modulo: 'LANCAMENTOS',
            title: 'Lançamentos',
            href: '/app/rh/folha-pagamento/lancamentos',
            funcionalidades: this.funcionalidades!()
        };
    },
    funcionalidades(): { [key: string]: FuncionalidadesType } {
        return {
            CONSULTAR_LANCAMENTOS: {
                label: 'Consultar Lançamentos'
            }
        }
    }
}