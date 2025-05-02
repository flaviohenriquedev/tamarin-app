'use client'

import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/ts/usuario";
import {Table} from "@/componentes/ui/data-display/table/table";
import {usuarioConlunasListagem} from "@/sistema/recursos-humanos/modulos/usuario/ts/usuario-colunas-listagem";
import {useCallback, useEffect, useState} from "react";
import {PageContainer} from "@/componentes/layout/app/page-container/page-container";
import {UsuarioFormularioCadastro} from "@/sistema/recursos-humanos/modulos/usuario/usuario-formulario-cadastro";
import {UsuarioService} from "@/sistema/recursos-humanos/modulos/usuario/ts/usuario-service";

const usuarioService = new UsuarioService();

export function UsuarioPaginaInicial() {
    const [usuario, setUsuario] = useState<Usuario>(new Usuario());
    const [listaEntidade, setListaEntidade] = useState<Usuario[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        usuarioService.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    // function handleEditar(entidade: Colaborador) {
    //     setUsuario(entidade);
    // }

    function handleDeletar(entidade: Usuario) {
        usuarioService.deletar(entidade.id).then();
    }

    const funcaoSalvar = useCallback(() => usuarioService.salvar(usuario), [usuario])
    const callBack = useCallback(() => setAtualizarLista(prev => !prev), [])

    const onSave = {funcaoSalvar, callBack}
    return (
        <PageContainer
            onSave={onSave}
            onModalOpen={() => setUsuario(new Usuario())}
            formularioCadastro={<UsuarioFormularioCadastro usuario={usuario}/>}>
            <Table colunas={usuarioConlunasListagem}
                   lista={listaEntidade}
                   funcaoDeletar={handleDeletar}/>
        </PageContainer>
    )
}
