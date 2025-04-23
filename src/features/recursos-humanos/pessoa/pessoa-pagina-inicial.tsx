'use client'

import {useCallback, useEffect, useState} from "react";
import {PageContainer} from "@/componentes/layout/app/page-container/page-container";
import {Table} from "@/componentes/ui/data-display/table/table";
import {
    departamentoColunasListagem
} from "@/sistema/recursos-humanos/modulos/departamento/ts/departamento-colunas-listagem";
import {PessoaService} from "@/sistema/recursos-humanos/modulos/pessoa/ts/pessoa-service";
import {Pessoa} from "@/sistema/recursos-humanos/modulos/pessoa/ts/pessoa";
import {PessoaFormularioCadastro} from "@/sistema/recursos-humanos/modulos/pessoa/pessoa-formulario-cadastro";
import {pessoaColunasListagem} from "@/sistema/recursos-humanos/modulos/pessoa/ts/pessoa-colunas-listagem";

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
