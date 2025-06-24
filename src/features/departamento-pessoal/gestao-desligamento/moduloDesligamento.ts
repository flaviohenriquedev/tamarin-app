import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloDesligamento: ModulosType = {
    infos() {
        return {
            id: 'gestao-desligamento',
            modulo: ModuloENUM.GESTAO_DESLIGAMENTO,
            title: 'Desligamento',
            href: '/app/dp/gestao/desligamento',
            funcionalidades: this.funcionalidades(),
            abas: [
                AbaDesligamentoInicio.infos(),
                AbaDesligamentoCadastro.infos(),
            ]
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()]);
    }
}

const AbaDesligamentoInicio: ModulosType = {
    infos() {
        return {
            id: 'gestao-desligamento-inicio',
            modulo: ModuloENUM.GESTAO_DESLIGAMENTO,
            title: 'Colaborador',
            href: '/app/dp/gestao/desligamento',
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
            href: '/app/dp/gestao/desligamento/cadastro',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}