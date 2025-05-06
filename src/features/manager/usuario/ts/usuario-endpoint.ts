import {EndPoint} from "@/types/_root/TEndpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const basUrl: string = '/usuario'

const endPointsExtras: EndPoint = {
    teste1: {
        caminho: '',
        metodo: MetodoHTTP.PUT
    }
}

export const usuarioEndPoints: EndPoint = {
    ...endPointsExtras,
    listar: {
        caminho: basUrl,
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: basUrl,
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: basUrl+'/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: basUrl+'/:id',
        metodo: MetodoHTTP.DELETE
    }
}
