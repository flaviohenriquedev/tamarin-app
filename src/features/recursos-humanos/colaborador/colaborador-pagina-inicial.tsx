'use client'

import {useCallback, useEffect, useState} from "react";
import {Colaborador} from "@/features/recursos-humanos/colaborador/ts/colaborador";
import {ColaboradorService} from "@/features/recursos-humanos/colaborador/ts/colaborador-service";
import {colaboradorConlunasListagem} from "@/features/recursos-humanos/colaborador/ts/colaborador-colunas-listagem";
import {Table} from "@/components/ui/table/table";


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
        <Table colunas={colaboradorConlunasListagem}
               lista={listaEntidade}
               funcaoDeletar={handleDeletar}/>
    )
}
