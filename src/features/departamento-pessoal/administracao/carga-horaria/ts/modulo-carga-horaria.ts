import {ModulosType} from "@/types/_root/ModulosTypes";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";
import {ModuloENUM} from "@/enums/ModuloEnum";

export const ModuloCargaHoraria: ModulosType = {
    infos() {
        return {
            id: 'dp-adm-carga-horaria',
            modulo: ModuloENUM.GESTAO_CARGA_HORARIA,
            title: 'Carga Horária',
            href: '/app/dp/carga-horaria',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}