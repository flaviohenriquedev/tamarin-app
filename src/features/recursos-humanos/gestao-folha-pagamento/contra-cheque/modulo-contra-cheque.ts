import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloContraCheque: ModulosType = {
    infos() {
        return {
            id: 'contra-cheque',
            modulo: ModuloENUM.GESTAO_CONTRA_CHEQUE,
            title: 'Contra-cheque',
            href: '/app/rh/folha-pagamento/lancamentos',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}