import {RouteType} from "@/types/_root/RouteType";

export abstract class Modulos {

    public abstract getModulos(): RouteType[];

    getModulosFiltrados(): RouteType[] {
        return [];
    }
}