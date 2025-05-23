'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {EstadoService} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado-service";
import {Estado} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado";
import {
    LocalidadeEstadoFormulario
} from "@/features/gerenciamento-sistema/gestao-localidade/estado/localidade-estado-formulario";
import {
    estadoColunasListagem
} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado-colunas-listagem";
import {toast} from "sonner";

const service = new EstadoService();

export function LocalidadeEstado() {
    const [entidade, setEntidade] = useState<Estado>(new Estado());

    const [listaEntidade, setListaEntidade] = useState<Estado[]>([]);

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
            setEntidade(new Estado());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<LocalidadeEstadoFormulario/>}
                        title={`Cadastro de Estado`}
                        onCloseModal={() => setEntidade(new Estado())}
                        funcaoAtualizarLista={atualizarLista}
                        colunas={estadoColunasListagem}
                        lista={listaEntidade}
                        onSubmit={handleSalvar}/>
    )
}