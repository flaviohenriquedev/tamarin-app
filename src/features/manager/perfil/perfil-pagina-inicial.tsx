'use client'

import {PerfilService} from "@/features/manager/perfil/ts/perfil-service";
import {useCallback, useEffect, useState} from "react";
import {toast} from "sonner";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {
    departamentoColunasListagem
} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento-colunas-listagem";
import {Perfil} from "@/features/manager/perfil/ts/perfil";
import {PerfilComponenteCadastro} from "@/features/manager/perfil/perfil-componente-cadastro";

const service = new PerfilService();

export function PerfilPaginaInicial() {
    const [entidade, setEntidade] = useState<Perfil>(new Perfil());
    const [listaEntidade, setListaEntidade] = useState<Perfil[]>([]);

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
            setEntidade(new Perfil());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro
            funcaoAtualizarLista={atualizarLista}
            colunas={departamentoColunasListagem}
            lista={listaEntidade}
            camposFormulario={<PerfilComponenteCadastro entidade={entidade}/>}
            title={`Cadastro de Perfil`}
            onSubmit={handleSalvar} />
    )
}