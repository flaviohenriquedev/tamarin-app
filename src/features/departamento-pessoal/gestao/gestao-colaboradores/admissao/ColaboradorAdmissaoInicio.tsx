'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {useCallback, useEffect, useState} from "react";
import {AcaoAdicional} from "@/components/layouts/pagina-cadastro/types/typesPaginaCadastro";
import {useRouter} from "next/navigation";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/service/ColaboradorService";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import Modal from "@/components/ui/modal/modal";

const service = new ColaboradorService();

export function ColaboradorAdmissaoInicio() {
    const route = useRouter();
    const [listaColaboradores, setListaColaboradores] = useState<Colaborador[]>([]);
    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    useEffect(() => {
        service.listarColaboradoresAtivos().then(result => {
            setListaColaboradores(result);
        })
    }, []);

    const atualizar = useCallback(() => {
        service.listar().then(result => {
            setListaColaboradores(result);
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
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizar}
                            acoesAdicionais={acoesAdicionais}>
                <div>
                    <ul className={`flex flex-col gap-2`}>
                        {listaColaboradores && listaColaboradores.map(cl => (
                            <li key={cl.id}>
                                <div className={`cursor-pointer rounded-lg bg-base-100 p-4`}
                                     onClick={() => {
                                         setColaborador(cl);
                                         setModalIsOpen(true);
                                     }}>
                                    <label>{cl.nomeCompleto}</label>
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