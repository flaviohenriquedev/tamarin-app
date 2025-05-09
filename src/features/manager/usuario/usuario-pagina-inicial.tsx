'use client'

import {UsuarioService} from "@/features/manager/usuario/ts/usuario-service";
import {useCallback, useEffect, useState} from "react";
import {toast} from "sonner";
import {UsuarioComponenteCadastro} from "@/features/manager/usuario/usuario-componente-cadastro";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {Table} from "@/components/ui/table/table";
import {usuarioColunasListagem} from "@/features/manager/usuario/ts/usuario-colunas-listagem";
import {UsuarioDTO} from "@/features/manager/usuario/ts/usuario-dto";

const service = new UsuarioService()

export function UsuarioPaginaInicial() {

    const [entidade, setEntidade] = useState<UsuarioDTO>(new UsuarioDTO());
    const [listaEntidade, setListaEntidade] = useState<UsuarioDTO[]>([]);

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
            setEntidade(new UsuarioDTO());
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<UsuarioComponenteCadastro entidade={entidade}/>}
                        onSubmit={handleSalvar}
                        title={`Cadastro de Usuário`}>
            <Table funcaoAtualizarLista={atualizarLista}
                   colunas={usuarioColunasListagem}
                   lista={listaEntidade}/>
        </PaginaCadastro>
    )
}