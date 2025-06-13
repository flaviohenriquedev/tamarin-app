import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloCursos: ModulosType = {
    infos() {
        return {
            id: 'treinamentos-cursos',
            modulo: ModuloENUM.GESTAO_CURSOS,
            title: 'Cursos',
            href: '/app/rh/treinamentos/cursos',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}