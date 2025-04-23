import {CrudService} from "@/sistema/_root/service/crud-service";
import {departamentoEndPoints} from "@/sistema/recursos-humanos/modulos/departamento/ts/departamento-end-points";
import {Departamento} from "@/sistema/recursos-humanos/modulos/departamento/ts/departamento";

export class DepartamentoService extends CrudService<Departamento> {
    constructor() {
        super(departamentoEndPoints)
    }
}
