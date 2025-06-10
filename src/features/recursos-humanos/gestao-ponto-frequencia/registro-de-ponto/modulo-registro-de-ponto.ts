import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloRegistroDePonto: ModulosType = {
    infos() {
        return {
            id: 'ponto-frequencia-registro-ponto',
            modulo: ModuloENUM.GESTAO_REGISTRO_DE_PONTO,
            title: 'Registro de Ponto',
            href: '/app/rh/ponto/registro',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}