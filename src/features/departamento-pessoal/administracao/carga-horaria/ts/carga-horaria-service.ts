import {CrudService} from "@/services/crud-service";
import {CargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria";
import {EndPointType} from "@/types/_root/EndPointType";
import {
    cargaHorariaEndpoint
} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria-endpoint";

export class CargaHorariaService extends CrudService<CargaHoraria> {
    public getBaseURL(): string {
        return "/carga-horaria";
    }
    public getEndpoint(): EndPointType {
        return cargaHorariaEndpoint;
    }
}