import {CrudService} from "@/sistema/_root/service/crud-service";
import {Pessoa} from "@/sistema/recursos-humanos/modulos/pessoa/ts/pessoa";
import {pessoaEndPoints} from "@/sistema/recursos-humanos/modulos/pessoa/ts/pessoa-end-points";

export class PessoaService extends CrudService<Pessoa> {
    constructor() {
        super(pessoaEndPoints)
    }
}
