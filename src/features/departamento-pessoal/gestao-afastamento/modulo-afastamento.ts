import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeEnum, FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloAfastamento: ModulosType = {
    infos() {
        return {
            id: 'gestao-afastamento',
            modulo: ModuloENUM.GESTAO_AFASTAMENTO,
            title: 'Afastamento',
            href: 'rh/colaborador',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao(),
            FuncionalidadeEnum.CONSULTAR_TESTE
        ]);
    }
}