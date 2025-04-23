import {EndPoint} from "@/sistema/_root/types/root-types";
import {MetodoHTTP} from "@/sistema/_root/enums/root-enum";

export const pessoaEndPoints: EndPoint = {
    listar: {
        caminho: '/pessoa',
        metodo: MetodoHTTP.GET
    },
    salvar: {
        caminho: '/pessoa',
        metodo: MetodoHTTP.POST
    },
    editar: {
        caminho: '/pessoa/:id',
        metodo: MetodoHTTP.PUT
    },
    deletar: {
        caminho: '/pessoa/:id',
        metodo: MetodoHTTP.DELETE
    }
}
