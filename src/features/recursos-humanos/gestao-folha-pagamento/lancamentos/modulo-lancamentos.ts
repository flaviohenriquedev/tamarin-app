import {FuncionalidadesType, ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'FOLHA_PAGAMENTO_LANCAMENTOS'

export const ModuloLancamentos: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'recursoshumanos-folha-pagamento-lancamentos',
            modulo: 'FOLHA_PAGAMENTO_LANCAMENTOS',
            title: 'Lançamentos',
            href: '/rh/folha-pagamento/lancamentos',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades(): { [key: string]: FuncionalidadesType } {
        return {
            CONSULTAR_FOLHA_PAGAMENTO: {
                label: 'Consultar Folha Pagamento'
            }
        }
    }
}