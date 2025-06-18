import {CepResponse} from "@/features/apis/brasilApi/cep/dto/CepResponse";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export class CepService {
    private baseUrl: string = "/brasil-api";

    async getCep(cep: string): Promise<CepResponse> {
        return await request<CepResponse>(`${this.baseUrl}/cep/${cep}`, MetodoHTTP.GET)
    }
}