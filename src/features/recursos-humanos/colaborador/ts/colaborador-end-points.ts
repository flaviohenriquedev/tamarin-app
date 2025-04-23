import {EndPoint} from "@/sistema/_root/types/root-types";
import {MetodoHTTP} from "@/sistema/_root/enums/root-enum";

const rotas: EndPoint = {
    rotaAlternativa: {
        caminho: '/colaborador/:id',
        metodo: MetodoHTTP.POST
    }
}

export const colaboradorEndPoints: EndPoint = {
    ...rotas,
    listar: {
        caminho: '/colaborador',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/colaborador',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/colaborador/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/colaborador/:id',
        metodo: MetodoHTTP.DELETE
    }
}
