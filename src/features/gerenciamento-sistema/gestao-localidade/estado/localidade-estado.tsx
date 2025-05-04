'use client'

import {useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {Table} from "@/components/ui/table/table";
import {EstadoService} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado-service";
import {Estado} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado";
import {
    LocalidadeEstadoFormulario
} from "@/features/gerenciamento-sistema/gestao-localidade/estado/localidade-estado-formulario";
import {
    estadoColunasListagem
} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado-colunas-listagem";
import {toast} from "sonner";

const service = new EstadoService();

export function LocalidadeEstado() {
    const [entidade, setEntidade] = useState<Estado>(new Estado());
    const [listaEntidade, setListaEntidade] = useState<Estado[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    function handleSalvar() {
        service.salvar(entidade, () => {
            setEntidade(new Estado());
            setAtualizarLista(true);
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<LocalidadeEstadoFormulario />} onSubmit={handleSalvar}>

            <Table colunas={estadoColunasListagem}
                   lista={listaEntidade}/>
        </PaginaCadastro>
    )
}