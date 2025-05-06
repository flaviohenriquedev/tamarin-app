import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const pessoaEndPoints: EndPointType = {
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
