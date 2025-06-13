import {EndPointType} from "@/types/_root/EndPointType";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

const rotas: Partial<EndPointType> = {
    login: {
        caminho: '/auth/login',
        metodo: MetodoHTTP.POST
    }
}

export const loginEndpoint: Partial<EndPointType> = {
    ...rotas
}