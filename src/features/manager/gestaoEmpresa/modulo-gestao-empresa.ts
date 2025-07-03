import {icones} from "@/components/common/icones";
import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloGestaoEmpresa: ModulosType = {
    infos() {
        return {
            id: 'gerenciarsistema-empresas',
            title: 'Cadastro',
            modulo: ModuloENUM.GESTAO_EMPRESA,
            icon: icones.empresa(),
            href: '/app/manager/empresas',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ])
    }
}