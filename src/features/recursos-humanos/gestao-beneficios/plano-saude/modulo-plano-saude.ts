import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloPlanoSaude: ModulosType = {
    infos() {
        return {
            id: 'beneficios-plano-saude',
            modulo: ModuloENUM.GESTAO_PLANO_SAUDE,
            title: 'Plano de Saúde',
            href: '/app/rh/beneficios/plano-saude',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}