import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloJornadas: ModulosType = {
    infos() {
        return {
            id: 'ponto-frequencia-jornadas',
            modulo: ModuloENUM.GESTAO_JORNADAS,
            title: 'Jornadas',
            href: '/app/rh/ponto/registro',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}