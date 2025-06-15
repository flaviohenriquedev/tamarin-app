'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {paisColunasListagem} from "@/features/manager/gestaoLocalidade/pais/ts/pais-colunas-listagem";
import {PaisService} from "@/features/manager/gestaoLocalidade/pais/ts/pais-service";
import {Table} from "@/components/ui/table/table";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputNumerico} from "@/components/ui/input/InputNumerico";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/InputString";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {Pais} from "@/features/manager/gestaoLocalidade/pais/ts/pais";

export function LocalidadePais() {

    const {
        openModal,
        setOpenModal,
        entidadeCadastro,
        listaEntidades,
        salvar,
        excluir,
        consultar,
        handleNovoCadastro,
        atualizarLista,
        setAcaoSalvar,
        clear
    } = usePaginaCadastro<Pais, PaisService>({
        service: new PaisService(),
        novaEntidade: () => new Pais()
    });

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
                            <InputString entidade={entidadeCadastro} atributo={`nomePt`}/>
                        </Label>
                        <Label title={`Sigla`}>
                            <InputString entidade={entidadeCadastro} atributo={`sigla`}/>
                        </Label>
                    </LineContent>
                    <LineContent>
                        <Label title={`Bacen`}>
                            <InputNumerico entidade={entidadeCadastro} atributo={`bacen`}/>
                        </Label>
                        <Label title={`DDI`}>
                            <InputNumerico entidade={entidadeCadastro} atributo={`ddi`}/>
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