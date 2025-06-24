import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloColaboradores: ModulosType = {
    infos() {
        return {
            id: 'gestao-admissao',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Colaboradores',
            href: '/app/dp/gestao/admissao',
            funcionalidades: this.funcionalidades(),
            abas: [
                AbaAdmissaoInicio.infos(),
                AbaAdmissaoCadastro.infos()
            ]
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}

const AbaAdmissaoInicio: ModulosType = {
    infos() {
        return {
            id: 'gestao-admissao-inicio',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Colaborador',
            href: '/app/dp/gestao/admissao',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}

const AbaAdmissaoCadastro: ModulosType = {
    infos() {
        return {
            id: 'gestao-admissao-cadastro',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Admissão',
            href: '/app/dp/gestao/admissao/cadastro',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}