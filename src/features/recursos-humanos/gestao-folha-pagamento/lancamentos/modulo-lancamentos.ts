import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloLancamentos: ModulosType = {
    infos() {
        return {
            id: 'lancamentos',
            modulo: ModuloENUM.GESTAO_LANCAMENTOS,
            title: 'Lançamentos',
            href: '/app/rh/folha-pagamento/lancamentos',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}