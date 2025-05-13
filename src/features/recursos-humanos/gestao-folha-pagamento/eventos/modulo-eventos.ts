import {FuncionalidadesType, ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'FOLHA_PAGAMENTO_EVENTOS'

export const ModuloEventos: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'recursoshumanos-folha-pagamento-eventos',
            modulo: 'FOLHA_PAGAMENTO_EVENTOS',
            title: 'Eventos',
            href: '/rh/folha-pagamento/eventos',
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