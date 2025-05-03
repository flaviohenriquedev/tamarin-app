import {EndPoint} from "@/types/TEndpoint";
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