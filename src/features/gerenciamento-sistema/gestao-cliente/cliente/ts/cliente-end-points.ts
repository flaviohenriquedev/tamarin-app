import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const endPoints: EndPointType = {
    salvarCliente: {
        caminho: '/clientes/salvar-cliente',
        metodo: MetodoHTTP.POST
    }
}

export const clienteEndPoints: EndPointType = {
    ...endPoints,
    listar: {
        caminho: '/clientes',
        metodo: MetodoHTTP.GET
    },
    buscarPorId: {
        caminho: '/clientes/:id',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/clientes',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/clientes/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/clientes/:id',
        metodo: MetodoHTTP.DELETE
    }
}
