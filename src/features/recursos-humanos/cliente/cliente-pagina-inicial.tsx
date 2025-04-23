'use client'

import {useCallback, useEffect, useState} from "react";
import {PageContainer} from "@/componentes/layout/app/page-container/page-container";
import {Table} from "@/componentes/ui/data-display/table/table";
import {ColaboradorService} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador-service";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador";
import {
    ColaboradorFormularioCadastro
} from "@/sistema/recursos-humanos/modulos/colaborador/colaborador-formulario-cadastro";
import {
    colaboradorConlunasListagem
} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador-colunas-listagem";
import {Cliente} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente";
import {ClienteService} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente-service";
import {clienteColunasListagem} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente-colunas-listagem";
import {ClienteFormularioCadastro} from "@/sistema/recursos-humanos/modulos/cliente/cliente-formulario-cadastro";

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
        <PageContainer
            onSave={onSave}
            onModalOpen={() => setEntidade(new Cliente())}
            formularioCadastro={<ClienteFormularioCadastro cliente={entidade}/>}>
            <Table colunas={clienteColunasListagem}
                   lista={listaEntidade}
                   funcaoDeletar={handleDeletar}/>
        </PageContainer>
    )
}
