import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";

export class ColaboradorEndereco extends EntidadePadrao {
    public colaborador: Colaborador;
    public cep: string;
    public rua: string;
    public complemento: string;
    public numero: string;
    public bairro: string;
    public cidade: Cidade;

    constructor() {
        super();
        this.colaborador = new Colaborador();
    }
}