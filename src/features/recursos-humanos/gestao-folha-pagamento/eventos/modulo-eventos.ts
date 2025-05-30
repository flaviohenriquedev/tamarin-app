import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'EVENTOS'

export const ModuloEventos: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'eventos',
            modulo: 'EVENTOS',
            title: 'Eventos',
            href: '/app/rh/folha-pagamento/eventos',
            funcionalidades: this.funcionalidades!()
        };
    },
    funcionalidades(){
        return {
            CONSULTAR_SERASA: {
                label: 'Consultar o Serasa'
            }
        }
    }
}