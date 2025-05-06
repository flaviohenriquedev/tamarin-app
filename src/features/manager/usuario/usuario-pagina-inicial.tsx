'use client'

import {UsuarioService} from "@/features/manager/usuario/ts/usuario-service";
import {useEffect, useState} from "react";
import {toast} from "sonner";
import {UsuarioCamposFormulario} from "@/features/manager/usuario/usuario-campos-formulario";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {Table} from "@/components/ui/table/table";
import {usuarioColunasListagem} from "@/features/manager/usuario/ts/usuario-colunas-listagem";
import {UsuarioDTO} from "@/features/manager/usuario/ts/usuario-dto";

const service = new UsuarioService()

export function UsuarioPaginaInicial() {

    const [entidade, setEntidade] = useState<UsuarioDTO>(new UsuarioDTO());
    const [listaEntidade, setListaEntidade] = useState<UsuarioDTO[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    function handleSalvar() {
        service.salvar(entidade, () => {
            setEntidade(new UsuarioDTO());
            setAtualizarLista(true);
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<UsuarioCamposFormulario entidade={entidade}/>}
                        onSubmit={handleSalvar}>
            <Table colunas={usuarioColunasListagem}
                   lista={listaEntidade}/>
        </PaginaCadastro>
    )
}