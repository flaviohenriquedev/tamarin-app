'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {EstadoService} from "@/features/manager/gestaoLocalidade/estado/ts/estado-service";
import {Estado} from "@/features/manager/gestaoLocalidade/estado/ts/estado";
import {estadoColunasListagem} from "@/features/manager/gestaoLocalidade/estado/ts/estado-colunas-listagem";
import {toast} from "sonner";
import {AcaoSalvar} from "@/features/sistema/types";
import {Table} from "@/components/ui/table/table";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {InputNumerico} from "@/components/ui/input/InputNumerico";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";

const service = new EstadoService();

export function LocalidadeEstado() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [entidade, setEntidade] = useState<Estado>(new Estado());
    const [listaEntidades, setListaEntidades] = useState<Estado[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidades(result)
        });
    }, []);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaEntidades(result)
        });
    }, []);

    function salvar() {
        service.salvar(entidade, () => {
            setEntidade(new Estado());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setEntidade(new Estado())
    }

    function consultar(entidade: Estado) {
        setEntidade(entidade);
        setOpenModal(true);
    }

    function excluir(entidade: Estado) {
        service.excluir(entidade.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setEntidade(new Estado())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaEntidades}
                    colunas={estadoColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Estado'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>

                    <LineContent>
                        <InputString
                            label={`Nome`}
                            atributo={`nome`}
                            entidade={entidade} />

                        <InputString
                            label={`Sigla`}
                            atributo={`sigla`}
                            entidade={entidade} />

                        <InputNumerico
                            label={`IBGE`}
                            atributo={`ibge`}
                            entidade={entidade}
                        />

                    </LineContent>

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