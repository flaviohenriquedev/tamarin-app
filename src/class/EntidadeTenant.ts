import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";

export class EntidadeTenant extends EntidadePadrao {
    empresa: Empresa;

    constructor() {
        super();
    }
}