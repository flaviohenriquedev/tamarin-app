'use client'

import {paisColunasListagem} from "@/features/manager/gestaoLocalidade/pais/ts/paisColunasListagem";
import {useCallback, useEffect, useState} from "react";
import {PaisService} from "@/features/manager/gestaoLocalidade/pais/ts/PaisService";
import {Pais} from "@/features/manager/gestaoLocalidade/pais/ts/Pais";
import {toast} from "sonner";
import {AcaoSalvar} from "@/features/sistema/types";
import {Table} from "@/components/ui/table/Table";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {Label} from "@/components/ui/label/label";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {InputString} from "@/components/ui/input/InputString";
import {InputNumerico} from "@/components/ui/input/InputNumerico";

const service = new PaisService();

export function LocalidadePais() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [entidade, setEntidade] = useState<Pais>(new Pais());
    const [listaEntidades, setListaEntidades] = useState<Pais[]>([]);

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
            setEntidade(new Pais());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setEntidade(new Pais())
    }

    function consultar(entidade: Pais) {
        setEntidade(entidade);
        setOpenModal(true);
    }

    function excluir(entidade: Pais) {
        service.excluir(entidade.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setEntidade(new Pais())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaEntidades}
                    colunas={paisColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de País'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>
                    <LineContent>
                        <Label title={`Nome`}>
                            <InputString entidade={entidade} atributo={`nomePt`}/>
                        </Label>
                        <Label title={`Sigla`}>
                            <InputString entidade={entidade} atributo={`sigla`}/>
                        </Label>
                    </LineContent>
                    <LineContent>
                        <Label title={`Bacen`}>
                            <InputNumerico entidade={entidade} atributo={`bacen`}/>
                        </Label>
                        <Label title={`DDI`}>
                            <InputNumerico entidade={entidade} atributo={`ddi`}/>
                        </Label>
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