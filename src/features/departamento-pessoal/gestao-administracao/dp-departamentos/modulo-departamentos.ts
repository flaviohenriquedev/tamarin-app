import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloDepartamentos: ModulosType = {
    infos() {
        return {
            id: 'recursoshumanos-administracao-dp-departamentos',
            modulo: ModuloENUM.GESTAO_DEPARTAMENTO,
            title: 'Departamentos',
            href: '/rh/adm/departamento',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}