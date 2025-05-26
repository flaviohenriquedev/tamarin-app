import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'CONTRA_CHEQUE'

export const ModuloContraCheque: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'contra-cheque',
            modulo: 'CONTRA_CHEQUE',
            title: 'Contra-cheque',
            href: '/rh/folha-pagamento/lancamentos'
        };
    }
}