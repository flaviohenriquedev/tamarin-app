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

const colaboradorService = new ColaboradorService();

export function ColaboradorPaginaInicial() {
    const [entidade, setEntidade] = useState<Colaborador>(new Colaborador());
    const [listaEntidade, setListaEntidade] = useState<Colaborador[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        colaboradorService.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    // function handleEditar(entidade: Colaborador) {
    //     setUsuario(entidade);
    // }

    function handleDeletar(entidade: Colaborador) {
        colaboradorService.deletar(entidade.id).then();
    }

    const funcaoSalvar = useCallback(() => colaboradorService.salvar(entidade), [entidade])
    const callBack = useCallback(() => setAtualizarLista(prev => !prev), [])

    const onSave = {funcaoSalvar, callBack}
    return (
        <PageContainer
            onSave={onSave}
            onModalOpen={() => setEntidade(new Colaborador())}
            formularioCadastro={<ColaboradorFormularioCadastro colaborador={entidade}/>}>
            <Table colunas={colaboradorConlunasListagem}
                   lista={listaEntidade}
                   funcaoDeletar={handleDeletar}/>
        </PageContainer>
    )
}
