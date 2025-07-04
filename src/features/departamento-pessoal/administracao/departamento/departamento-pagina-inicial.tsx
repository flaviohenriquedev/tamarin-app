'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {toast} from "react-hot-toast";
import Modal from "@/components/ui/modal/Modal";
import {Form} from "@/components/ui/form/Form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {Table} from "@/components/ui/table/Table";
import {DepartamentoService} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento-service";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {
    departamentoColunasListagem
} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento-colunas-listagem";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {AcaoSalvar} from "@/features/sistema/types";

const service = new DepartamentoService();

export function DepartamentoPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [departamento, setDepartamento] = useState<Departamento>(new Departamento());
    const [listaDepartamentos, setListaDepartamentos] = useState<Departamento[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaDepartamentos(result)
        });
    }, []);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaDepartamentos(result)
        });
    }, []);

    function salvar() {
        service.salvar(departamento, () => {
            setDepartamento(new Departamento());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setDepartamento(new Departamento())
    }

    function consultar(dp: Departamento) {
        setDepartamento(dp);
        setOpenModal(true);
    }

    function excluir(dp: Departamento) {
        service.excluir(dp.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setDepartamento(new Departamento())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaDepartamentos}
                    colunas={departamentoColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Departamento'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>
                    <LineContent>
                        <InputString
                            label={`Descrição`}
                            entidade={departamento}
                            atributo={`descricao`}
                            required/>
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
