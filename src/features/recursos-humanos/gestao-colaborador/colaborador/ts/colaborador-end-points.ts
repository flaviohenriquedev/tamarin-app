import {EndPoint} from "@/types/_root/TEndpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

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
