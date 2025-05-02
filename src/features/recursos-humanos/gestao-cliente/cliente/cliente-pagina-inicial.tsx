'use client'

import {useCallback, useEffect, useState} from "react";
import {Table} from "@/components/ui/table/table";
import {clienteColunasListagem} from "@/features/recursos-humanos/gestao-cliente/cliente/ts/cliente-colunas-listagem";
import {Cliente} from "@/features/recursos-humanos/gestao-cliente/cliente/ts/cliente";
import {ClienteService} from "@/features/recursos-humanos/gestao-cliente/cliente/ts/cliente-service";

const clienteService = new ClienteService();

export function ClientePaginaInicial() {
    const [entidade, setEntidade] = useState<Cliente>(new Cliente());
    const [listaEntidade, setListaEntidade] = useState<Cliente[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        clienteService.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    // function handleEditar(entidade: Colaborador) {
    //     setUsuario(entidade);
    // }

    function handleDeletar(entidade: Cliente) {
        clienteService.deletar(entidade.id).then();
    }

    const funcaoSalvar = useCallback(() => clienteService.salvar(entidade), [entidade])
    const callBack = useCallback(() => setAtualizarLista(prev => !prev), [])

    const onSave = {funcaoSalvar, callBack}
    return (
        <Table colunas={clienteColunasListagem}
               lista={listaEntidade}
               funcaoDeletar={handleDeletar}/>
    )
}
