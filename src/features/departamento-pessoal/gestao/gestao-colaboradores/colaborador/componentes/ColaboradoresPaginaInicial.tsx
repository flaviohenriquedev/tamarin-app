'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {useCallback, useEffect, useState} from "react";
import {AcaoAdicional} from "@/components/layouts/pagina-cadastro/types/typesPaginaCadastro";
import {useRouter} from "next/navigation";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/service/ColaboradorService";
import {
    Colaborador
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/Colaborador";

const service = new ColaboradorService();

export function ColaboradoresPaginaInicial() {
    const route = useRouter();
    const [listaEntidade, setListaEntidade] = useState<Colaborador[]>([]);
    const [entidade, setEntidade] = useState<Colaborador>(new Colaborador());

    useEffect(() => {
        service.listarColaboradoresAtivos().then(result => {
            setListaEntidade(result);
        })
    }, []);

    const atualizar = useCallback(() => {
        service.listar().then(result => {
            setListaEntidade(result);
        })
    }, [])

    function redirecionarParaAdmissao() {
        route.push('/app/dp/colaboradores/admissao')
    }

    const acoesAdicionais: AcaoAdicional[] = [
        {
            label: 'Nova Admissão',
            estilo: 'success',
            acao: redirecionarParaAdmissao
        }
    ]

    return (
        <PaginaCadastro funcaoAtualizarLista={atualizar}
                        acoesAdicionais={acoesAdicionais}>
            <div>
                Colaboradores
            </div>
        </PaginaCadastro>
    )
}