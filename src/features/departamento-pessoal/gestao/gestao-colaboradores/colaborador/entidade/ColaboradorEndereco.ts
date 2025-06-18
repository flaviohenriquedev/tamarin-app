import {EntidadePadrao} from "@/class/EntidadePadrao";
import {
    Colaborador
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/Colaborador";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";

export class ColaboradorEndereco extends EntidadePadrao {
    public colaborador: Colaborador;
    public cep: string;
    public rua: string;
    public quadra: string;
    public lote: string;
    public numero: string;
    public bairro: string;
    public cidade: Cidade;

    constructor() {
        super();
        this.colaborador = new Colaborador();
    }
}