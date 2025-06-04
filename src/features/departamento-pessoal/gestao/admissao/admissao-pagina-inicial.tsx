'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {AdmissaoService} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao-service";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {useCallback, useEffect, useState} from "react";
import {Table} from "@/components/ui/table/table";
import {admissaoColunasListagem} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao-colunas-listagem";
import {Form} from "@/components/ui/form/form";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import {toast} from "sonner";
import {AcaoSalvar} from "@/features/sistema/types";
import {
    AdmissaoDepartamento
} from "@/features/departamento-pessoal/gestao/admissao/admissao-departamento/ts/admissao-departamento";
import {AdmissaoCargo} from "@/features/departamento-pessoal/gestao/admissao/admissao-cargo/ts/admissao-cargo";
import {AdmissaoEndereco} from "@/features/departamento-pessoal/gestao/admissao/admissao-endereco/ts/admissao-endereco";
import {AdmissaoTabs} from "@/features/departamento-pessoal/gestao/admissao/admissao-tabs";

const service = new AdmissaoService();

export function AdmissaoPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [listaAdmissoes, setListaAdmissoes] = useState<Admissao[]>([]);
    const [admissao, setAdmissao] = useState<Admissao>(new Admissao());

    const [admissaoDepartamento, setAdmissaoDepartamento] = useState<AdmissaoDepartamento>(new AdmissaoDepartamento());
    const [admissaoCargo, setAdmissaoCargo] = useState<AdmissaoCargo>(new AdmissaoCargo());
    const [admissaoEndereco, setAdmissaoEndereco] = useState<AdmissaoEndereco>(new AdmissaoEndereco());

    useEffect(() => {
        service.listar().then(result => {
            setListaAdmissoes(result);
        })
    }, []);

    const atualizar = useCallback(() => {
        service.listar().then(result => {
            setListaAdmissoes(result);
        })
    }, [])

    function handleNovoCadastro() {
        setAdmissao(new Admissao())
        setOpenModal(true);
    }

    const clear = () => {
        setAdmissao(new Admissao())
    }

    function salvar() {
        service.salvar(admissao, () => {
            setAdmissao(new Admissao());
            atualizar();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    function consultar(entidade: Admissao) {
        setAdmissao(entidade);
        setOpenModal(true);
    }

    function excluir(entidade: Admissao) {
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
                       lista={listaAdmissoes}
                       colunas={admissaoColunasListagem}
                       acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Admissão'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar} className={`min-h-[90%]`}>
                    <AdmissaoTabs
                        admissao={admissao}
                        admissaoEndereco={admissaoEndereco}
                        admissaoCargo={admissaoCargo}/>
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
                            buttonStyle={`info`}>Salvar e Fechar</Button>
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