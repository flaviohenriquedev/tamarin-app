import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const rotas: EndPointType = {
    rotaAlternativa: {
        caminho: '/colaborador/:id',
        metodo: MetodoHTTP.POST
    }
}

export const colaboradorEndPoints: EndPointType = {
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
