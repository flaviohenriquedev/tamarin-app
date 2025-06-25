'use client'

import {useRouter} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/service/ColaboradorService";
import {AcaoAdicional} from "@/components/layouts/pagina-cadastro/types/typesPaginaCadastro";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import Modal from "@/components/ui/modal/modal";
import {
    StatusColaboradorFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/enum/StatusColaboradorENUM";

const service = new ColaboradorService()

export function ColaboradorDesligamentoInicio() {
    const route = useRouter();
    const [listaColaboradores, setListaColaboradores] = useState<Colaborador[]>([]);
    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    useEffect(() => {
        service.listarColaboradoresDesligados().then(result => {
            setListaColaboradores(result);
        })
    }, []);

    const atualizar = useCallback(() => {
        service.listar().then(result => {
            setListaColaboradores(result);
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
                        {listaColaboradores && listaColaboradores.map(cl => (
                            <li key={cl.id}>
                                <div className={`flex flex-col gap-2 cursor-pointer rounded-lg bg-base-100 p-4`}
                                     onClick={() => {
                                         setColaborador(cl);
                                         setModalIsOpen(true);
                                     }}>
                                    <p className={`text-lg font-semibold`}>{cl.nomeCompleto}</p>
                                    <p className={`text-sm`}>Matricula: {cl.matricula}</p>
                                    <p className={`text-sm`}>{StatusColaboradorFactory.getLabel(cl.statusColaborador)}</p>
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
                    {colaborador.nomeCompleto}
                </div>
            </Modal>
        </>
    )
}