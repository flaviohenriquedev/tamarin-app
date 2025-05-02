'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {
    LocalidadePaisFormulario
} from "@/features/gerenciamento-sistema/gestao-localidade/pais/localidade-pais-formulario";
import {Table} from "@/components/ui/table/table";
import {paisColunasListagem} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais-colunas-listagem";
import {useEffect, useState} from "react";
import {PaisService} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais-service";
import {Pais} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais";

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

    return (
        <PaginaCadastro formularioCadastro={<LocalidadePaisFormulario />}>

            <Table colunas={paisColunasListagem}
                   lista={listaEntidade}/>
        </PaginaCadastro>
    )
}