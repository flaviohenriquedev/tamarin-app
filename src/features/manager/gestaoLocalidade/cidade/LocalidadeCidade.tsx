'use client'

import {useCallback, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/CidadeService";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {cidadeColunasListagem} from "@/features/manager/gestaoLocalidade/cidade/ts/cidadeColunasListagem";
import {Table} from "@/components/ui/table/Table";
import Modal from "@/components/ui/modal/Modal";
import {Form} from "@/components/ui/form/Form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {InputNumerico} from "@/components/ui/input/InputNumerico";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {EstadoService} from "@/features/manager/gestaoLocalidade/estado/ts/EstadoService";
import useSelectItem from "@/components/ui/select-item/hook/useSelectItem";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {Estado} from "@/features/manager/gestaoLocalidade/estado/ts/Estado";
import {set} from "lodash";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";

const cidadeService = new CidadeService();
const estadoService = new EstadoService();

export function LocalidadeCidade() {
    const [entidade, setEntidade] = useState<Cidade>(new Cidade());

    const clear = useCallback(() => {
        setEntidade(new Cidade())
    }, [])
    const {
        isOpenModal,
        setIsOpenModal,
        setAcaoSalvar,
        refresh,
        listaEntidade,
        salvar,
        deletar
    } = usePaginaCadastro<Cidade, CidadeService>({
        service: cidadeService,
        onCloseModal: clear,
    })

    const {selectItens: selectItensEstado} = useSelectItem({
        service: estadoService,
        fieldValor: 'id',
        fieldDescricao: 'nome',
    })

    const onSelectEstado = useCallback((item: TSelectItem | null) => {
        if (item) {
            const estado: Estado = new Estado();
            estado.id = item.value as string;
            set(entidade, 'estado', estado);
        }
    }, [entidade])

    function consultar(entidade: Cidade) {
        setEntidade(entidade);
        setIsOpenModal(true);
    }

    function handleDelete(entidade: Cidade) {
        void deletar(entidade.id);
    }

    function handleNovoCadastro() {
        setEntidade(new Cidade())
        setIsOpenModal(true);
    }

    function onSubmit() {
        void salvar(entidade);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={refresh}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={refresh}
                    lista={listaEntidade}
                    colunas={cidadeColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: handleDelete}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Cidade'}
                   isOpen={isOpenModal}
                   setIsOpen={setIsOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={onSubmit}>

                    <LineContent>
                        <InputString
                            label={`Nome`}
                            atributo={`nome`}
                            entidade={entidade}/>

                        <InputString
                            label={`Sigla`}
                            atributo={`sigla`}
                            entidade={entidade}/>

                        <InputNumerico
                            label={`IBGE`}
                            atributo={`ibge`}
                            entidade={entidade}
                        />

                        <SelectItem
                            label={`Estado`}
                            entidade={entidade}
                            fieldValor={'estado.id'}
                            values={selectItensEstado}
                            onSelect={onSelectEstado}/>

                        <InputCPF />

                        <InputDataCompleta atributo={``} entidade={entidade} />

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