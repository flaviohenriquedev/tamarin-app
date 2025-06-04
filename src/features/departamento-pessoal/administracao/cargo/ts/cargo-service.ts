import {CrudService} from "@/services/crud-service";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {EndPointType} from "@/types/_root/EndPointType";
import {cargoEndpoint} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo-endpoint";

export class CargoService extends CrudService<Cargo> {
    public getBaseURL(): string {
        return "/cargo";
    }

    public getEndpoint(): EndPointType {
        return cargoEndpoint;
    }
}