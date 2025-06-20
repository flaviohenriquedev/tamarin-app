import {EnderecoViaCep} from "@/features/apis/viaCep/dto/EnderecoViaCep";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export class ViaCepService {
    async getEndereco(cep: string): Promise<EnderecoViaCep> {
        return await request<EnderecoViaCep>(`${this.getBaseUrl()}/${cep}`, MetodoHTTP.GET);
    }

    private getBaseUrl(): string {
        return "/via-cep";
    }
}