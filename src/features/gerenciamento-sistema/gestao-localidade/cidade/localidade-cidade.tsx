'use client'

import {useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {Table} from "@/components/ui/table/table";
import {CidadeService} from "@/features/gerenciamento-sistema/gestao-localidade/cidade/ts/cidade-service";
import {Cidade} from "@/features/gerenciamento-sistema/gestao-localidade/cidade/ts/cidade";
import {
    LocalidadeCidadeFormulario
} from "@/features/gerenciamento-sistema/gestao-localidade/cidade/localidade-cidade-formulario";
import {
    cidadeColunasListagem
} from "@/features/gerenciamento-sistema/gestao-localidade/cidade/ts/cidade-colunas-listagem";

const service = new CidadeService();

export function LocalidadeCidade() {
    const [entidade, setEntidade] = useState<Cidade>(new Cidade());
    const [listaEntidade, setListaEntidade] = useState<Cidade[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    return (
        <PaginaCadastro formularioCadastro={<LocalidadeCidadeFormulario />}>

            <Table colunas={cidadeColunasListagem}
                   lista={listaEntidade}/>
        </PaginaCadastro>
    )
}