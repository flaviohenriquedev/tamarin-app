import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/cidade";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/colaborador";

export class ColaboradorEndereco {
    public colaborador: Colaborador;
    public rua: string;
    public quadra: string;
    public lote: string;
    public numero: string;
    public bairro: string;
    public cidade: Cidade;

    constructor() {
        this.colaborador = new Colaborador();
    }
}