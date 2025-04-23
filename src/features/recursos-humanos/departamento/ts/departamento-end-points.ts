import {EndPoint} from "@/sistema/_root/types/root-types";
import {MetodoHTTP} from "@/sistema/_root/enums/root-enum";

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
