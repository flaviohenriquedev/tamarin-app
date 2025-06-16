'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {useCallback, useEffect, useState} from "react";
import {Table} from "@/components/ui/table/table";
import {admissaoColunasListagem} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao-colunas-listagem";
import {Form} from "@/components/ui/form/form";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import {toast} from "sonner";
import {AcaoSalvar} from "@/features/sistema/types";
import {AdmissaoTabs} from "@/features/departamento-pessoal/gestao/admissao/AdmissaoTabs";
import {ColaboradorService} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/ColaboradorService";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-endereco/ts/ColaboradorEndereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-cargo/ts/ColaboradorCargo";

const service = new ColaboradorService();

export function AdmissaoPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [listaEntidade, setListaEntidade] = useState<Colaborador[]>([]);
    const [entidade, setEntidade] = useState<Colaborador>(new Colaborador());
    const [colaboradorEndereco, setColaboradorEndereco] = useState<ColaboradorEndereco>(new ColaboradorEndereco());
    const [colaboradorCargo, setColaboradorCargo] = useState<ColaboradorCargo>(new ColaboradorCargo());

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result);
        })
    }, []);

    const atualizar = useCallback(() => {
        service.listar().then(result => {
            setListaEntidade(result);
        })
    }, [])

    function handleNovoCadastro() {
        setEntidade(new Colaborador())
        setOpenModal(true);
    }

    const clear = () => {
        setEntidade(new Colaborador());
        setColaboradorCargo(new ColaboradorCargo());
        setColaboradorEndereco(new ColaboradorEndereco());
    }

    function salvar() {

        const entidadeAtualizada: Colaborador = {
            ...entidade,
            colaboradorEndereco,
            listaColaboradorCargo: [colaboradorCargo]
        };

        service.salvar(entidadeAtualizada, () => {
            setEntidade(new Colaborador());
            atualizar();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then();
    }

    function consultar(entidade: Colaborador) {
        setColaboradorEndereco(entidade.colaboradorEndereco);
        setColaboradorCargo(entidade.cargoAtivo);
        setEntidade(entidade);
        setOpenModal(true);
    }

    function excluir(entidade: Colaborador) {
        service.excluir(entidade.id).then(() => {
            atualizar();
            toast.success("Cadastro deletado.")
        })
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizar}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table funcaoAtualizarLista={atualizar}
                       lista={listaEntidade}
                       colunas={admissaoColunasListagem}
                       acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Admissão'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar} className={`min-h-[100%]`}>
                    <AdmissaoTabs
                        colaborador={entidade}
                        colaboradorEndereco={colaboradorEndereco}
                        colaboradorCargo={colaboradorCargo}/>
                    <ButtonGroup>
                        <Button
                            onClick={() => setAcaoSalvar('SAVE')}
                            buttonSize={`sm`}
                            type={`submit`}
                            buttonStyle={`success`}>Salvar</Button>
                        <Button
                            onClick={() => setAcaoSalvar('SAVE_AND_CLOSE')}
                            buttonSize={`sm`}
                            type={`submit`}
                            buttonStyle={`info`}>Salvar e Finalizar</Button>
                        <Button
                            buttonSize={`sm`}
                            type={`button`}
                            buttonStyle={`warning`}>Editar</Button>
                        <Button
                            buttonSize={`sm`}
                            type={`button`}
                            buttonStyle={`error`}>Excluir</Button>
                    </ButtonGroup>
                </Form>
            </Modal>
        </>
    )
}