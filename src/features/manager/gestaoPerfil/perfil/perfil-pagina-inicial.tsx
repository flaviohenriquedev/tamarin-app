'use client'

import {useCallback, useEffect, useState} from "react";
import {toast} from "sonner";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {PerfilComponenteCadastro} from "@/features/manager/gestaoPerfil/perfil/perfil-componente-cadastro";
import {PerfilService} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-service";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {perfilColunasListagem} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-colunas-listagem";

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
        entidade.sistemas = entidade.sistemas.filter(s => s.checked);

        service.salvar(entidade, () => {
            setEntidade(new Perfil());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<PerfilComponenteCadastro entidade={entidade}/>}
                        title={`Cadastro de Perfil`}
                        onOpenModal={() => setEntidade(new Perfil())}
                        funcaoAtualizarLista={atualizarLista}
                        colunas={perfilColunasListagem}
                        lista={listaEntidade}
                        onSubmit={handleSalvar}/>
    )
}