import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloTipoContrato: ModulosType = {
    infos() {
        return {
            id: 'gestao-contrato',
            modulo: ModuloENUM.GESTAO_CONTRATO,
            title: 'Tipo Contrato',
            href: '/app/dp/tipo-contrato',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}