import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const desligamentoEndpoint: EndPointType = {
    buscarPorId: {
        caminho: '/:id',
        metodo: MetodoHTTP.GET
    },
    deletar: {
        caminho: '/:id',
        metodo: MetodoHTTP.DELETE
    },
    editar: {
        caminho: '/:id',
        metodo: MetodoHTTP.PUT
    },
    listar: {
        metodo: MetodoHTTP.GET
    },
    salvar: {
        metodo: MetodoHTTP.POST
    }
}