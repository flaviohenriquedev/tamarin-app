import {CrudService} from "@/services/crud-service";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import {empresaEndPoints} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa-end-points";
import {EndPointType} from "@/types/_root/EndPointType";

export class EmpresaService extends CrudService<Empresa> {
    public getBaseURL(): string {
        return "/empresa";
    }

    public getEndpoint(): EndPointType {
        return empresaEndPoints;
    }
}
