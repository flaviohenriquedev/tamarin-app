'use client'

import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {useCallback, useEffect, useState} from "react";
import {toast} from "sonner";
import {UsuarioComponenteCadastro} from "@/features/manager/gestaoUsuario/usuario/usuario-componente-cadastro";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {usuarioColunasListagem} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-colunas-listagem";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

const service = new UsuarioService()

export function UsuarioPaginaInicial() {

    const [entidade, setEntidade] = useState<Usuario>(new Usuario());
    const [listaEntidade, setListaEntidade] = useState<Usuario[]>([]);

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
            setEntidade(new Usuario());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    function handleConsultar(usuario: Usuario) {
        console.log('USUARIO', usuario);
        setEntidade(usuario);
    }

    return (
        <PaginaCadastro camposFormulario={<UsuarioComponenteCadastro entidade={entidade}/>}
                        funcaoAtualizarLista={atualizarLista}
                        onSubmit={handleSalvar}
                        title={`Cadastro de Usuário`}
                        colunas={usuarioColunasListagem}
                        lista={listaEntidade}
                        acoesTabela={{consultar: handleConsultar}}
                        onCloseModal={() => setEntidade(new Usuario())}/>
    )
}