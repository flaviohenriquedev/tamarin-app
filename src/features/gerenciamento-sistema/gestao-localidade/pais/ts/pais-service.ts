import {CrudService} from "@/services/crud-service";
import {paisEndPoints} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais-end-points";
import {Pais} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais";

export class PaisService extends CrudService<Pais> {
    constructor() {
        super(paisEndPoints)
    }
}
