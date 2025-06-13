import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloProcessosSeletivos: ModulosType = {
    infos() {
        return {
            id: 'recrutamento-selecao-processos-seletivos',
            modulo: ModuloENUM.GESTAO_PROCESSOS_SELETIVOS,
            title: 'Processos Seletivos',
            href: '/app/rh/recrutamento/processos',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}