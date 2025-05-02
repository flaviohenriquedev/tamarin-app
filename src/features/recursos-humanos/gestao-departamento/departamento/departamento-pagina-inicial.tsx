'use client'


import {
    DepartamentoService
} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento-service";
import {useCallback, useEffect, useState} from "react";
import {Departamento} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento";
import {PageContainer} from "@/components/layouts/page-container/page-container";
import {
    DepartamentoFormularioCadastro
} from "@/features/recursos-humanos/gestao-departamento/departamento/departamento-formulario-cadastro";
import {
    departamentoColunasListagem
} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento-colunas-listagem";
import {Table} from "@/components/ui/table/table";

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
