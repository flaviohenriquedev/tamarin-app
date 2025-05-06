import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const basUrl: string = '/pais'
export const paisEndPoints: EndPointType = {
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
