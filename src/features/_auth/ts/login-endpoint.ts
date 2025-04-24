import {EndPoint} from "@/types/enpoint";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const rotas: EndPoint = {
    login: {
        caminho: '/auth/login',
        metodo: MetodoHTTP.POST
    }
}

export const loginEndpoint: EndPoint = {
    ...rotas
}