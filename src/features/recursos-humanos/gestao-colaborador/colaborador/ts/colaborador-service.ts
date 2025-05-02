import {CrudService} from "@/services/crud-service";
import {Colaborador} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador";
import {
    colaboradorEndPoints
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador-end-points";

export class ColaboradorService extends CrudService<Colaborador> {
    constructor() {
        super(colaboradorEndPoints)
    }
}
