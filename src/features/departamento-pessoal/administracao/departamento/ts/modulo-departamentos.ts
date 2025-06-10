import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloDepartamentos: ModulosType = {
    infos() {
        return {
            id: 'dp-adm-departamentos',
            modulo: ModuloENUM.GESTAO_DEPARTAMENTOS,
            title: 'Departamentos',
            href: '/app/dp/departamento',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}