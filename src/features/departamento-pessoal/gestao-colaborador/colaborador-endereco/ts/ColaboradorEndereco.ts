import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {EntidadePadrao} from "@/class/EntidadePadrao";

export class ColaboradorEndereco extends EntidadePadrao {
    public colaborador: Colaborador;
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