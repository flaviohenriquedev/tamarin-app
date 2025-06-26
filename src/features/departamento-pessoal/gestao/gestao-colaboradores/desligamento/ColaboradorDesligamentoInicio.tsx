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
import {Avatar} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/Avatar";
import {formatDateBR} from "@/utils/utils";
import {Button} from "@/components/ui/button/button";
import {icones} from "@/components/common/icones";
import {Form} from "@/components/ui/form/form";
import {ButtonGroup} from "@/components/ui/button/button-group";

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

    function selecionarDesligamento(dl: ColaboradorDesligamento) {
        setColaboradorDesligamento(dl);
        setModalIsOpen(true);
    }

    function clear() {
        setColaboradorDesligamento(new ColaboradorDesligamento());
    }

    function onSubmit() {
        desligamentoService.salvar(colaboradorDesligamento).then(() => {
            setModalIsOpen(false);
            atualizar();
        });
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
                <div className={`flex flex-col gap-3 overflow-x-auto min-h-[70vh] max-h-[70vh]`}>
                    {listaDesligamentos && listaDesligamentos.map(dl => (
                        <div key={dl.id}
                             className={`flex items-center w-full justify-between bg-base-100 rounded-2xl p-3 border border-base-300 shadow-md`}>
                            <div className="flex items-center gap-4 w-[50%]">
                                <Avatar tamanho={`grande`} imagem={dl.colaborador.base64}/>
                                <div className={`flex flex-col gap-1`}>
                                    <label className="font-bold">{dl.colaborador.nomeCompleto}</label>
                                    <div className={`flex gap-1 text-[10pt]`}>
                                        <label className="font-semibold">Matricula:</label>
                                        <label>{dl.colaborador.matricula}</label>
                                    </div>
                                    <label className={`
                                        text-[9pt]
                                        w-fit px-2 py-1
                                        rounded-sm
                                        ${StatusColaboradorFactory.getInfo(dl.colaborador.statusColaborador).bg}
                                    `}>{StatusColaboradorFactory.getLabel(dl.colaborador.statusColaborador)}</label>
                                </div>
                            </div>
                            <div className={`flex flex-col w-[50%] gap-1`}>
                                <label>{dl.colaborador.cargoAtivo.cargo.descricao}</label>
                                <label
                                    className="text-sm opacity-50">{dl.colaborador.cargoAtivo.departamento.descricao}</label>
                                <div className={`flex text-sm gap-2`}>
                                    <label className={`font-semibold`}>Data Desligamento:</label>
                                    <label>{formatDateBR(dl.dataDesligamento)}</label>
                                </div>
                            </div>
                            <div className={`flex items-center gap-2 p-4`}>
                                <Button buttonStyle={`info`}
                                        buttonClass={`soft`}
                                        icone={icones.eye}
                                        onClick={() => selecionarDesligamento(dl)}>Detalhes</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </PaginaCadastro>

            <Modal isOpen={modalIsOpen}
                   title={`Dados Colaborador`}
                   setIsOpen={setModalIsOpen}
                   onCloseModal={clear}
                   tamanho={`telaInteira`}>
                <Form onSubmit={onSubmit}>
                    <div className={`bg-base-200 rounded-lg flex p-4 w-full h-full shadow-lg`}>
                        <div className={`flex flex-col gap-2`}>
                            <Avatar tamanho={`extra-grande`}
                                    imagem={colaboradorDesligamento.colaborador.base64}/>
                            <div>
                                <label
                                    className={`text-[15pt] font-semibold text-neutral-600`}>{colaboradorDesligamento.colaborador.nomeCompleto}</label>
                            </div>
                        </div>
                    </div>

                    <ButtonGroup>
                        <Button
                            type={`submit`}
                            buttonSize={`md`}
                        >Salvar</Button>
                    </ButtonGroup>
                </Form>
            </Modal>
        </>
    )
}