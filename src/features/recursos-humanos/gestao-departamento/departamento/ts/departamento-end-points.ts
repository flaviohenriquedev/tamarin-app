import {EndPoint} from "@/types/enpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export const departamentoEndPoints: EndPoint = {
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
