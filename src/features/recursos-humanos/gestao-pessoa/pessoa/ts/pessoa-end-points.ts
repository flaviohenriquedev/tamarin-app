import {EndPoint} from "@/types/_root/TEndpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const pessoaEndPoints: EndPoint = {
    listar: {
        caminho: '/pessoa',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/pessoa',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/pessoa/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/pessoa/:id',
        metodo: MetodoHTTP.DELETE
    }
}
