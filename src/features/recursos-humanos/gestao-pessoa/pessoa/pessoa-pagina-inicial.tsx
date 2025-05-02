'use client'

import {PessoaService} from "@/features/recursos-humanos/gestao-pessoa/pessoa/ts/pessoa-service";
import {useCallback, useEffect, useState} from "react";
import {Pessoa} from "@/features/recursos-humanos/gestao-pessoa/pessoa/ts/pessoa";
import {PageContainer} from "@/components/layouts/page-container/page-container";
import {PessoaFormularioCadastro} from "@/features/recursos-humanos/gestao-pessoa/pessoa/pessoa-formulario-cadastro";
import {pessoaColunasListagem} from "@/features/recursos-humanos/gestao-pessoa/pessoa/ts/pessoa-colunas-listagem";
import {Table} from "@/components/ui/table/table";

const service = new PessoaService();

export function PessoaPaginaInicial() {
    const [entidade, setEntidade] = useState<Pessoa>(new Pessoa());
    const [listaEntidade, setListaEntidade] = useState<Pessoa[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    // function handleEditar(entidade: Colaborador) {
    //     setUsuario(entidade);
    // }

    function handleDeletar(entidade: Pessoa) {
        service.deletar(entidade.id).then();
    }

    const funcaoSalvar = useCallback(() => service.salvar(entidade), [entidade])
    const callBack = useCallback(() => setAtualizarLista(prev => !prev), [])
    const onSave = {funcaoSalvar, callBack}

    return (
        <PageContainer
            onSave={onSave}
            onModalOpen={() => setEntidade(new Pessoa())}
            formularioCadastro={<PessoaFormularioCadastro entidade={entidade}/>}>
            <Table colunas={pessoaColunasListagem}
                   lista={listaEntidade}
                   funcaoDeletar={handleDeletar}/>
        </PageContainer>
    )
}
