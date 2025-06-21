import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";

export class EnderecoViaCep {
    public cep: string;
    public logradouro: string;
    public complemento: string;
    public bairro: string;
    public localidade: string;
    public uf: string;
    public cidade: Cidade;

    constructor(cep: string, logradouro: string, complemento: string, bairro: string, localidade: string, uf: string, cidade: Cidade) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.bairro = bairro;
        this.localidade = localidade;
        this.uf = uf;
        this.cidade = cidade;
    }
}
