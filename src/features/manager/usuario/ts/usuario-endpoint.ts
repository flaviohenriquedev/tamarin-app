import {EndPoint} from "@/types/TEndpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const basUrl: string = '/usuario'
export const usuarioEndPoints: EndPoint = {
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
