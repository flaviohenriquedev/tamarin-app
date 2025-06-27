'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {toast} from "sonner";
import Modal from "@/components/ui/modal/Modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {Table} from "@/components/ui/table/Table";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {AcaoSalvar} from "@/features/sistema/types";
import {CargoService} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo-service";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {cargoColunasListagem} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo-colunas-listagem";

const service = new CargoService();

export function CargoPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [cargo, setCargo] = useState<Cargo>(new Cargo());
    const [listaCargos, setListaCargos] = useState<Cargo[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaCargos(result)
        });
    }, []);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaCargos(result)
        });
    }, []);

    function salvar() {
        service.salvar(cargo, () => {
            setCargo(new Cargo());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setCargo(new Cargo())
    }

    function consultar(entidade: Cargo) {
        setCargo(entidade);
        setOpenModal(true);
    }

    function excluir(entidade: Cargo) {
        service.excluir(entidade.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setCargo(new Cargo())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaCargos}
                    colunas={cargoColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Cargo'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>
                    <LineContent>
                        <InputString
                            label={`Descrição`}
                            entidade={cargo}
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
