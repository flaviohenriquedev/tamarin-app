import {EndPoint} from "@/sistema/_root/types/root-types";
import {MetodoHTTP} from "@/sistema/_root/enums/root-enum";

export const clienteEndPoints: EndPoint = {
    listar: {
        caminho: '/cliente',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/cliente',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/cliente/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/cliente/:id',
        metodo: MetodoHTTP.DELETE
    }
}
