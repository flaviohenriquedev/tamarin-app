import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloEscalas: ModulosType = {
    infos() {
        return {
            id: 'ponto-frequencia-escalas',
            modulo: ModuloENUM.GESTAO_ESCALAS,
            title: 'Escalas',
            href: '/app/rh/ponto/escalas',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}