import {CrudService} from "@/services/crud-service";
import {Pessoa} from "@/features/recursos-humanos/gestao-pessoa/pessoa/ts/pessoa";
import {pessoaEndPoints} from "@/features/recursos-humanos/gestao-pessoa/pessoa/ts/pessoa-end-points";

export class PessoaService extends CrudService<Pessoa> {
    constructor() {
        super(pessoaEndPoints)
    }
}
