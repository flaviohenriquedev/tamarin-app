import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/cidade";

export class AdmissaoEndereco {
    public admissao: Admissao;
    public rua: string;
    public quadra: string;
    public lote: string;
    public numero: string;
    public bairro: string;
    public cidade: Cidade;

    constructor() {
        this.admissao = new Admissao();
    }
}