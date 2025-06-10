import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloValeTransporte: ModulosType = {
    infos() {
        return {
            id: 'beneficios-vale-transporte',
            modulo: ModuloENUM.GESTAO_VALE_TRANSPORTE,
            title: 'Vale Transporte',
            href: '/app/rh/beneficios/vale-transporte',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}