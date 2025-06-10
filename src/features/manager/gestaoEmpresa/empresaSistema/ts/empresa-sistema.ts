import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";

export class EmpresaSistema extends EntidadePadrao {
    public empresa: Empresa;
    public keySistema: SistemaENUM;

    constructor() {
        super();
        this.empresa = new Empresa();
    }
}