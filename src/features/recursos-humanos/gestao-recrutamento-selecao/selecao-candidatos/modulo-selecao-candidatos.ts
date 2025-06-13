import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloSelecaoCandidatos: ModulosType = {
    infos() {
        return {
            id: 'recrutamento-selecao-candidatos',
            modulo: ModuloENUM.GESTAO_SELECAO_CANDIDATOS,
            title: 'Candidatos',
            href: '/app/rh/recrutamento/candidatos',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}