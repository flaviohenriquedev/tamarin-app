'use client'

import {
    DepartamentoService
} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento-service";
import {useCallback, useEffect, useState} from "react";
import {Departamento} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento";
import {
    DepartamentoFormularioCadastro
} from "@/features/recursos-humanos/gestao-departamento/departamento/departamento-formulario-cadastro";
import {
    departamentoColunasListagem
} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento-colunas-listagem";
import {Table} from "@/components/ui/table/table";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {toast} from "sonner";

const service = new DepartamentoService();

export function DepartamentoPaginaInicial() {
    const [entidade, setEntidade] = useState<Departamento>(new Departamento());
    const [listaEntidade, setListaEntidade] = useState<Departamento[]>([]);

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
            setEntidade(new Departamento());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro
            camposFormulario={<DepartamentoFormularioCadastro entidade={entidade}/>}
            title={`Cadastro de Departamento`}
            onSubmit={handleSalvar}>
            <Table funcaoAtualizarLista={atualizarLista}
                   colunas={departamentoColunasListagem}
                   lista={listaEntidade}/>
        </PaginaCadastro>
    )
}
