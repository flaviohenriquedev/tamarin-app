import {CrudService} from "@/sistema/_root/service/crud-service";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador";
import {colaboradorEndPoints} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador-end-points";

export class ColaboradorService extends CrudService<Colaborador> {
    constructor() {
        super(colaboradorEndPoints)
    }
}
