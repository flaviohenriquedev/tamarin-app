import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'GESTAO_FERIAS'

export const ModuloFerias: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'gestao-ferias',
            modulo: 'GESTAO_FERIAS',
            title: 'Férias',
            href: 'rh/colaborador',
            funcionalidades: this.funcionalidades!()
        };
    },
    funcionalidades() {
        return {
            CONSULTAR_TESTE: { label: 'Aplicar Deconto' },
            CONSULTAR_TESTE2: { label: 'Cancelar Atribuições' },
            CONSULTAR_TESTE3: { label: 'Fazer uns trem fora da lei' },
            CONSULTAR_TESTE4: { label: 'Deixar de vir' },
            CONSULTAR_TESTE5: { label: 'Falar algo' },
            CONSULTAR_TESTE6: { label: 'Cuspir na pia' },
            CONSULTAR_TESTE7: { label: 'Rome Ofise' },
            CONSULTAR_TESTE8: { label: '3 hora de comida' },
            CONSULTAR_TESTE9: { label: 'Tudo pode' },
            CONSULTAR_TESTE10: { label: 'Pode nada' },
        };
    }
}