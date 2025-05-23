'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {
    LocalidadePaisCamposFormulario
} from "@/features/gerenciamento-sistema/gestao-localidade/pais/localidade-pais-campos-formulario";
import {paisColunasListagem} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais-colunas-listagem";
import {useCallback, useEffect, useState} from "react";
import {PaisService} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais-service";
import {Pais} from "@/features/gerenciamento-sistema/gestao-localidade/pais/ts/pais";
import {toast} from "sonner";

const service = new PaisService();

export function LocalidadePais() {
    const [entidade, setEntidade] = useState<Pais>(new Pais());

    const [listaEntidade, setListaEntidade] = useState<Pais[]>([]);

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
            setEntidade(new Pais());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<LocalidadePaisCamposFormulario entidade={entidade}/>}
                        title={`Cadastro de País`}
                        onCloseModal={() => setEntidade(new Pais())}
                        funcaoAtualizarLista={atualizarLista}
                        colunas={paisColunasListagem}
                        lista={listaEntidade}
                        onSubmit={handleSalvar}/>
    )
}