'use client'

import {useCallback, useEffect, useState} from "react";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {
    ClienteFormularioCadastro
} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/cliente-formulario-cadastro";
import {toast} from "sonner";
import {
    clienteColunasListagem
} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-colunas-listagem";

const service = new ClienteService();

export function ClientePaginaInicial() {
    const [entidade, setEntidade] = useState<Cliente>(new Cliente());
    const [listaEntidade, setListaEntidade] = useState<Cliente[]>([]);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, []);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    function handleSalvar() {
        service.salvar(entidade, () => {
            setEntidade(new Cliente());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<ClienteFormularioCadastro entidade={entidade}/>}
                        onSubmit={handleSalvar}
                        title={`Cadastro de Clientes`}
                        funcaoAtualizarLista={atualizarLista}
                        colunas={clienteColunasListagem}
                        lista={listaEntidade} />
    )
}
