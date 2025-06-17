'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {ColaboradorFeriasService} from "@/features/departamento-pessoal/gestao/ferias/class/ColaboradorFeriasService";
import {Table} from "@/components/ui/table/Table";
import {
    colaboradorFeriasColunasListagem
} from "@/features/departamento-pessoal/gestao/ferias/ts/colaboradorFeriasColunasListagem";
import {ColaboradorFerias} from "@/features/departamento-pessoal/gestao/ferias/class/ColaboradorFerias";
import {useCallback, useState} from "react";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {LineContent} from "@/components/ui/line-content/line-content";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import useSelectItem from "@/components/ui/select-item/hook/useSelectItem";
import {ColaboradorService} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/ColaboradorService";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {set} from "lodash";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";

const colaboradorFeriasService = new ColaboradorFeriasService();
const colaboradorService = new ColaboradorService();

export function ColaboradorFeriasPaginaInicial() {

    const [colaboradorFerias, setColaboradorFerias] = useState<ColaboradorFerias>(new ColaboradorFerias());

    const {selectItens: selectItensColaborador} = useSelectItem({
        service: colaboradorService,
        fieldDescricao: 'nomeCompleto',
        fieldValor: 'id'
    })
    const onSelectColaborador = useCallback((item: TSelectItem) => {
        const colaborador: Colaborador = new Colaborador();
        colaborador.id = item.value as string;
        set(colaboradorFerias, 'colaborador', colaborador);
    }, [colaboradorFerias])
    
    const clear = useCallback(() => {
        setColaboradorFerias(new ColaboradorFerias())
    }, [])

    const {
        listaEntidade,
        isOpenModal,
        setIsOpenModal,
        refresh,
        salvar,
        setAcaoSalvar,
        pageConfig
    } = usePaginaCadastro<ColaboradorFerias, ColaboradorFeriasService>({
        service: colaboradorFeriasService,
        onCloseModal: clear
    })
    
    const novo = useCallback(() => {
        setIsOpenModal(true);
    }, [setIsOpenModal])

    function onSubmit() {
        salvar(colaboradorFerias).then()
    }

    return (
        <>
            <PaginaCadastro
                funcaoAtualizarLista={refresh}
                funcaoNovoCadastro={novo}
                >
                <Table funcaoAtualizarLista={refresh}
                       lista={listaEntidade}
                       pageConfig={pageConfig}
                       colunas={colaboradorFeriasColunasListagem}/>
            </PaginaCadastro>
            <Modal title={'Férias'}
                   isOpen={isOpenModal}
                   setIsOpen={setIsOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={onSubmit} className={`min-h-[100%]`}>
                    <LineContent>
                        <SelectItem
                            entidade={colaboradorFerias}
                            fieldValor={'colaborador.id'}
                            values={selectItensColaborador}
                            onSelect={onSelectColaborador} />
                    </LineContent>

                    <LineContent>
                        
                        <InputDataCompleta
                            label={`Periodo Inicial`}
                            atributo={'periodoInicial'}
                            entidade={colaboradorFerias} />

                        <InputDataCompleta
                            label={`Periodo Final`}
                            atributo={'periodoFinal'}
                            entidade={colaboradorFerias} />

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