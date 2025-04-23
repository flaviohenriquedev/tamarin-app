import {EndPoint} from "@/sistema/_root/types/root-types";
import {MetodoHTTP} from "@/sistema/_root/enums/root-enum";
const rotas: EndPoint = {
    login: {
        caminho: '/auth/login',
        metodo: MetodoHTTP.POST
    }
}

export const loginEndpoint: EndPoint = {
    ...rotas
}