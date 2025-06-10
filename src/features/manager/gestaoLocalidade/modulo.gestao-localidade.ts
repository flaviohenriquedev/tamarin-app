import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloGestaoLocalidade: ModulosType = {
    infos() {
        return {
            id: 'gerenciar-sistema-dominio-localidade',
            title: 'Localidade',
            modulo: ModuloENUM.GESTAO_LOCALIDADE,
            href: '/app/manager/localidade',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}