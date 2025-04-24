import {EndPoint} from "@/sistema/_root/types/root-types";
import {MetodoHTTP} from "@/sistema/_root/enums/root-enum";

const rotas: EndPoint = {
    rotaAlternativa: {
        caminho: '/usuario/:id',
        metodo: MetodoHTTP.POST
    }
}

export const usuarioEndPoints: EndPoint = {
    ...rotas,
    listar: {
        caminho: '/usuario',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/usuario',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/usuario/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/usuario/:id',
        metodo: MetodoHTTP.DELETE
    }
}