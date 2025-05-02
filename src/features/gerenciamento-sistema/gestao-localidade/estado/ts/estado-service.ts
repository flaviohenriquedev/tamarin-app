import {CrudService} from "@/services/crud-service";
import {Estado} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado";
import {estadoEndPoints} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado-end-points";

export class EstadoService extends CrudService<Estado> {
    constructor() {
        super(estadoEndPoints)
    }
}
