import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloCargos: ModulosType = {
    infos() {
        return {
            id: 'dp-adm-cargos',
            modulo: ModuloENUM.GESTAO_CARGOS,
            title: 'Cargos',
            href: '/app/dp/cargo',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}

