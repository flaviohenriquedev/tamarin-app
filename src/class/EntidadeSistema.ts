import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {EntidadeTenant} from "@/class/EntidadeTenant";

export class EntidadeSistema extends EntidadeTenant{
    public sistema: SistemaENUM;

    constructor() {
        super();
    }
}