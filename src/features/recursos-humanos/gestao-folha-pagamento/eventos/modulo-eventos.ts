import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloEventos: ModulosType = {
    infos() {
        return {
            id: 'eventos',
            modulo: ModuloENUM.GESTAO_EVENTOS,
            title: 'Eventos',
            href: '/app/rh/folha-pagamento/eventos',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}