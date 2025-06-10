import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloAdmissao: ModulosType = {
    infos() {
        return {
            id: 'gestao-admissao',
            modulo: ModuloENUM.GESTAO_ADMISSAO,
            title: 'Admissão',
            href: '/app/dp/admissao',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}