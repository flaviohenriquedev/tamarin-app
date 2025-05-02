import {CrudService} from "@/services/crud-service";
import {Cidade} from "@/features/gerenciamento-sistema/gestao-localidade/cidade/ts/cidade";
import {cidadeEndPoints} from "@/features/gerenciamento-sistema/gestao-localidade/cidade/ts/cidade-end-points";

export class CidadeService extends CrudService<Cidade> {
    constructor() {
        super(cidadeEndPoints)
    }
}
