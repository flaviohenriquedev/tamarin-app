'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/CidadeService";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {cidadeColunasListagem} from "@/features/manager/gestaoLocalidade/cidade/ts/cidadeColunasListagem";
import {toast} from "sonner";
import {AcaoSalvar} from "@/features/sistema/types";
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

const service = new CidadeService();
const estadoService = new EstadoService();

export function LocalidadeCidade() {

    const {selectItens: selectItensEstado} = useSelectItem({
        service: estadoService,
        fieldValor: 'id',
        fieldDescricao: 'nome',
    })

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [entidade, setEntidade] = useState<Cidade>(new Cidade());
    const [listaEntidades, setListaEntidades] = useState<Cidade[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidades(result)
        });
    }, []);

    const onSelectEstado = useCallback((item: TSelectItem) => {
        const estado: Estado = new Estado();
        estado.id = item.value as string;
        set(entidade, 'estado', estado);
    }, [entidade])

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaEntidades(result)
        });
    }, []);

    function salvar() {
        service.salvar(entidade, () => {
            setEntidade(new Cidade());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setEntidade(new Cidade())
    }

    function consultar(entidade: Cidade) {
        setEntidade(entidade);
        setOpenModal(true);
    }

    function excluir(entidade: Cidade) {
        service.excluir(entidade.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setEntidade(new Cidade())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaEntidades}
                    colunas={cidadeColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Cidade'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>

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