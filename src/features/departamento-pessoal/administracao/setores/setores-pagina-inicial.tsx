'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {toast} from "sonner";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Table} from "@/components/ui/table/table";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {AcaoSalvar} from "@/features/sistema/types";
import {SetoresService} from "@/features/departamento-pessoal/administracao/setores/ts/setores-service";
import {Setor} from "@/features/departamento-pessoal/administracao/setores/ts/setor";
import {setorColunasListagem} from "@/features/departamento-pessoal/administracao/setores/ts/setor-colunas-listagem";

const service = new SetoresService();

export function SetoresPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [setor, setSetor] = useState<Setor>(new Setor());
    const [listaSetores, setListaSetores] = useState<Setor[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaSetores(result)
        });
    }, []);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaSetores(result)
        });
    }, []);

    function salvar() {
        service.salvar(setor, () => {
            setSetor(new Setor());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setSetor(new Setor())
    }

    function consultar(entidade: Setor) {
        setSetor(entidade);
        setOpenModal(true);
    }

    function excluir(setor: Setor) {
        service.excluir(setor.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setSetor(new Setor())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaSetores}
                    colunas={setorColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Setor'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>
                    <LineContent>
                        <InputString
                            label={`Descrição`}
                            entidade={setor}
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
