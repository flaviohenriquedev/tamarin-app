import {EndPoint} from "@/types/enpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const clienteEndPoints: EndPoint = {
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
