import {Departamento} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento";
import {CrudService} from "@/services/crud-service";
import {
    departamentoEndPoints
} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento-end-points";

export class DepartamentoService extends CrudService<Departamento> {
    constructor() {
        super(departamentoEndPoints)
    }
}
