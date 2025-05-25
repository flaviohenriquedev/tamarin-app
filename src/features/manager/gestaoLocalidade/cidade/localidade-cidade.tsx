'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/cidade-service";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/cidade";
import {LocalidadeCidadeFormulario} from "@/features/manager/gestaoLocalidade/cidade/localidade-cidade-formulario";
import {cidadeColunasListagem} from "@/features/manager/gestaoLocalidade/cidade/ts/cidade-colunas-listagem";
import {toast} from "sonner";

const service = new CidadeService();

export function LocalidadeCidade() {
    const [entidade, setEntidade] = useState<Cidade>(new Cidade());

    const [listaEntidade, setListaEntidade] = useState<Cidade[]>([]);

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
            setEntidade(new Cidade());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
        }).then()
    }

    return (
        <PaginaCadastro camposFormulario={<LocalidadeCidadeFormulario />}
                        title={`Cadastro de Cidade`}
                        onCloseModal={() => setEntidade(new Cidade())}
                        funcaoAtualizarLista={atualizarLista}
                        colunas={cidadeColunasListagem}
                        lista={listaEntidade}
                        onSubmit={handleSalvar}/>
    )
}