import {EndPoint} from "@/types/enpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const basUrl: string = '/pais'
export const paisEndPoints: EndPoint = {
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
