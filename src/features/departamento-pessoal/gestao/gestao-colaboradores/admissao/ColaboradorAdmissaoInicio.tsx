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
import {
    AvatarColaborador
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/AvatarColaborador";
import {
    StatusColaboradorFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/enum/StatusColaboradorENUM";
import {formatDateBR} from "@/utils/utils";
import {Button} from "@/components/ui/button/button";

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
        route.push('/app/dp/gestao/admissao/cadastro')
    }

    function selecionarColaborador(cl: Colaborador) {
        setColaborador(cl);
        setModalIsOpen(true);
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


                <div className={`flex flex-col gap-3 overflow-x-auto`}>
                    {listaColaboradores && listaColaboradores.map(cl => (
                        <div key={cl.id} className={`flex items-center w-full justify-between bg-base-100 rounded-2xl p-3`}>
                            <div className="flex items-center gap-4 w-[50%]">
                                <AvatarColaborador colaborador={cl} />
                                <div className={`flex flex-col gap-1`}>
                                    <label className="font-bold">{cl.nomeCompleto}</label>
                                    <label className={`
                                        text-sm
                                        w-fit px-2 py-1
                                        rounded-lg
                                        ${StatusColaboradorFactory.getInfo(cl.statusColaborador).bg}
                                    `}>{StatusColaboradorFactory.getLabel(cl.statusColaborador)}</label>
                                </div>
                            </div>
                            <div className={`flex flex-col w-[50%] gap-1`}>
                                <label>{cl.cargoAtivo.cargo.descricao}</label>
                                <label className="text-sm opacity-50">{cl.cargoAtivo.departamento.descricao}</label>
                                <div className={`flex text-sm gap-2`}>
                                    <label className={`font-semibold`}>Admissão:</label>
                                    <label>{formatDateBR(cl.cargoAtivo.dataAdmissao)}</label>
                                </div>
                            </div>

                            <div>
                                <Button onClick={() => selecionarColaborador(cl)}>Detalhes</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </PaginaCadastro>

            <Modal isOpen={modalIsOpen}
                   setIsOpen={setModalIsOpen}
                   tamanho={`telaInteira`}>
                <div>
                    {colaborador.nomeCompleto}
                    <label>Matricula: {colaborador.matricula}</label>
                </div>
            </Modal>
        </>
    )
}