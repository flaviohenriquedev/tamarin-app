import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const usuarioEndPoints: EndPointType = {
    listar: {
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
