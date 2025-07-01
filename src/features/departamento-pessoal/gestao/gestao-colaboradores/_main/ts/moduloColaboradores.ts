import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloColaboradores: ModulosType = {
    infos() {
        return {
            id: 'gestao-admissao',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Colaboradores',
            href: '/app/dp/gestao/colaborador',
            funcionalidades: this.funcionalidades(),
            abas: [
                AbaAdmissaoInicio.infos(),
                AbaAdmissaoCadastro.infos(),
                AbaFerias.infos(),
                AbaAfastamento.infos(),
                AbaDesligamentoCadastro.infos(),
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
            title: 'Colaboradores',
            href: '/app/dp/gestao/colaborador',
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
            href: '/app/dp/gestao/colaborador/admissao',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}

const AbaAfastamento: ModulosType = {
    infos() {
        return {
            id: 'gestao-afastamento-cadastro',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Afastamento',
            href: '/app/dp/gestao/colaborador/afastamento',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}

const AbaFerias: ModulosType = {
    infos() {
        return {
            id: 'gestao-afastamento-cadastro',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Férias',
            href: '/app/dp/gestao/colaborador/ferias',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}

const AbaDesligamentoCadastro: ModulosType = {
    infos() {
        return {
            id: 'gestao-desligamento-cadastro',
            modulo: ModuloENUM.GESTAO_DESLIGAMENTO,
            title: 'Desligamento',
            href: '/app/dp/gestao/colaborador/desligamento',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}