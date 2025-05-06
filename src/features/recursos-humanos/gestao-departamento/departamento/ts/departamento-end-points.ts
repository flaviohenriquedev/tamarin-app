import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const departamentoEndPoints: EndPointType = {
    listar: {
        caminho: '/departamento',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/departamento',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/departamento/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/departamento/:id',
        metodo: MetodoHTTP.DELETE
    }
}
