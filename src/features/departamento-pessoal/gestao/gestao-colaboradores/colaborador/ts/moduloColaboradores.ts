import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloColaboradores: ModulosType = {
    infos() {
        return {
            id: 'gestao-colaboradores',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Colaboradores',
            href: '/app/dp/colaboradores',
            funcionalidades: this.funcionalidades(),
            abas: [
                AbaColaborador.infos(),
                AbaAdmissao.infos()
            ]
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}

const AbaColaborador: ModulosType = {
    infos() {
        return {
            id: 'gestao-colaboradores-aba-colaborador',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Colaborador',
            href: '/app/dp/colaboradores',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}

const AbaAdmissao: ModulosType = {
    infos() {
        return {
            id: 'gestao-colaboradores-aba-admissao',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Admissão',
            href: '/app/dp/colaboradores/admissao',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}