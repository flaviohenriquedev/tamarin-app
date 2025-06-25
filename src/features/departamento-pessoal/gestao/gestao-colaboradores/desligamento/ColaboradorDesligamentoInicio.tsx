'use client'

import {useRouter} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {AcaoAdicional} from "@/components/layouts/pagina-cadastro/types/typesPaginaCadastro";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import Modal from "@/components/ui/modal/modal";
import {
    StatusColaboradorFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/enum/StatusColaboradorENUM";
import {
    ColaboradorDesligamentoService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/cadastro/service/ColaboradorDesligamentoService";
import {
    ColaboradorDesligamento
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/cadastro/entidade/ColaboradorDesligamento";

const desligamentoService = new ColaboradorDesligamentoService()

export function ColaboradorDesligamentoInicio() {
    const route = useRouter();
    const [listaDesligamentos, setlistaDesligamentos] = useState<ColaboradorDesligamento[]>([]);
    const [colaboradorDesligamento, setColaboradorDesligamento] = useState<ColaboradorDesligamento>(new ColaboradorDesligamento());
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    useEffect(() => {
        desligamentoService.listar().then(result => {
            setlistaDesligamentos(result);
        })
    }, []);

    const atualizar = useCallback(() => {
        desligamentoService.listar().then(result => {
            setlistaDesligamentos(result);
        })
    }, [])

    function redirecionarParaDesligamento() {
        route.push('/app/dp/gestao/desligamento/cadastro')
    }

    const acoesAdicionais: AcaoAdicional[] = [
        {
            label: 'Novo Desligamento',
            estilo: 'success',
            acao: redirecionarParaDesligamento
        }
    ]

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizar}
                            acoesAdicionais={acoesAdicionais}>
                <div>
                    <ul className={`flex flex-col gap-2`}>
                        {listaDesligamentos && listaDesligamentos.map(dl => (
                            <li key={dl.id}>
                                <div className={`flex flex-col gap-2 cursor-pointer rounded-lg bg-base-100 p-4`}
                                     onClick={() => {
                                         setColaboradorDesligamento(dl);
                                         setModalIsOpen(true);
                                     }}>
                                    <p className={`text-lg font-semibold`}>{dl.colaborador.nomeCompleto}</p>
                                    <p className={`text-sm`}>Matricula: {dl.colaborador.matricula}</p>
                                    <p className={`text-sm`}>{StatusColaboradorFactory.getLabel(dl.colaborador.statusColaborador)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </PaginaCadastro>

            <Modal isOpen={modalIsOpen}
                   setIsOpen={setModalIsOpen}
                   tamanho={`telaInteira`}>
                <div>
                    {colaboradorDesligamento.colaborador.nomeCompleto}
                </div>
            </Modal>
        </>
    )
}