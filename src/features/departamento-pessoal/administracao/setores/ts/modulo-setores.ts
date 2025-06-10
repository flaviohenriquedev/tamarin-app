import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloSetores: ModulosType = {
    infos() {
        return {
            id: 'dp-adm-setores',
            modulo: ModuloENUM.GESTAO_SETORES,
            title: 'Setores',
            href: '/app/dp/setor',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}