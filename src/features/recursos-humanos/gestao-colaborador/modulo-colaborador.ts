import {icones} from "@/components/common/icones";
import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'COLABORADOR'

export const ModuloColaborador: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'recursoshumanos-colaborador',
            modulo: 'COLABORADOR',
            title: 'Colaborador',
            icon: icones.colaboradores,
            href: '/rh/colaborador',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return {
            CONSULTAR_TESTE: { label: 'Consultar Teste' }
        };
    }
}