import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const clienteEndPoints: EndPointType = {
    listar: {
        caminho: '/cliente',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/cliente',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/cliente/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/cliente/:id',
        metodo: MetodoHTTP.DELETE
    }
}
