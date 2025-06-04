import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";
import {EndPointType} from "@/types/_root/EndPointType";

export const setoresEndpoint: EndPointType = {
    listar: {
        metodo: MetodoHTTP.GET
    },
    buscarPorId: {
        caminho: '/:id',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/:id',
        metodo: MetodoHTTP.DELETE
    }
}