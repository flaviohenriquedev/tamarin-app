'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {
    LocalidadePaisCamposFormulario
} from "@/features/gerenciamento-sistema/gestao-localidade/pais/localidade-pais-campos-formulario";
import {Table} from "@/components/ui/table/table";
import {paisColunasListagem} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais-colunas-listagem";
import {useEffect, useState} from "react";
import {PaisService} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais-service";
import {Pais} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais";
import {toast} from "sonner";

const service = new PaisService();

export function LocalidadePais() {

    const [entidade, setEntidade] = useState<Pais>(new Pais());
    const [listaEntidade, setListaEntidade] = useState<Pais[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    function handleSalvar() {
        service.salvar(entidade, () => {
            setEntidade(new Pais());
            setAtualizarLista(true);
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<LocalidadePaisCamposFormulario entidade={entidade}/>}
                        onSubmit={handleSalvar}>
            <Table colunas={paisColunasListagem}
                   lista={listaEntidade}/>
        </PaginaCadastro>
    )
}