'use client'

import {useCallback, useEffect, useState} from "react";
import {PageContainer} from "@/componentes/layout/app/page-container/page-container";
import {Table} from "@/componentes/ui/data-display/table/table";
import {
    DepartamentoFormularioCadastro
} from "@/sistema/recursos-humanos/modulos/departamento/departamento-formulario-cadastro";
import {
    departamentoColunasListagem
} from "@/sistema/recursos-humanos/modulos/departamento/ts/departamento-colunas-listagem";
import {DepartamentoService} from "@/sistema/recursos-humanos/modulos/departamento/ts/departamento-service";
import {Departamento} from "@/sistema/recursos-humanos/modulos/departamento/ts/departamento";

const service = new DepartamentoService();

export function DepartamentoPaginaInicial() {
    const [entidade, setEntidade] = useState<Departamento>(new Departamento());
    const [listaEntidade, setListaEntidade] = useState<Departamento[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    // function handleEditar(entidade: Colaborador) {
    //     setUsuario(entidade);
    // }

    function handleDeletar(entidade: Departamento) {
        service.deletar(entidade.id).then();
    }

    const funcaoSalvar = useCallback(() => service.salvar(entidade), [entidade])
    const callBack = useCallback(() => setAtualizarLista(prev => !prev), [])
    const onSave = {funcaoSalvar, callBack}

    return (
        <PageContainer
            onSave={onSave}
            onModalOpen={() => setEntidade(new Departamento())}
            formularioCadastro={<DepartamentoFormularioCadastro entidade={entidade}/>}>
            <Table colunas={departamentoColunasListagem}
                   lista={listaEntidade}
                   funcaoDeletar={handleDeletar}/>
        </PageContainer>
    )
}
