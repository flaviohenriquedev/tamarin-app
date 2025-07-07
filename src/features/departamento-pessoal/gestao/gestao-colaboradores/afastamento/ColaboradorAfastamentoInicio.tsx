'use client'

import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {
    ColaboradorAfastamentoService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/afastamento/service/ColaboradorAfastamentoService";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {Table} from "@/components/ui/table/Table";
import {
    ColaboradorAfastamento
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/afastamento/model/ColaboradorAfastamento";
import {
    colaboradorAfastamentoColunas
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/afastamento/ts/colaboradorAfastamentoColunas";
import Modal from "@/components/ui/modal/Modal";
import {Form} from "@/components/ui/form/Form";
import {BuscaColaborador} from "@/features/departamento-pessoal/gestao/gestao-ferias/components/BuscaColaborador";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {useCallback, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {getBooleanFromString} from "@/utils/utils";

const colaboradorAfastamentoService = new ColaboradorAfastamentoService();

export function ColaboradorAfastamentoInicio() {

    const [colaboradorAfastamento, setColaboradorAfastamento] = useState<ColaboradorAfastamento>(new ColaboradorAfastamento());
    const route = useRouter();
    const searchParams = useSearchParams();
    const idColaborador = searchParams.get('id');
    const cdt = searchParams.get('cdt');

    const clearUrlParams = useCallback(() => {
        route.push(window.location.pathname)
    }, [route])

    const clear = useCallback(() => {
        setColaboradorAfastamento(new ColaboradorAfastamento());
        clearUrlParams();
    }, [clearUrlParams])

    const {
        refresh,
        listaEntidade,
        setIsOpenModal,
        isOpenModal,
        salvar,
        setAcaoSalvar
    } = usePaginaCadastro<ColaboradorAfastamento, ColaboradorAfastamentoService>({
        service: colaboradorAfastamentoService,
        onCloseModal: clear,
        iniciarModalAberto: getBooleanFromString(cdt)
    })

    function novoCadastro() {
        setIsOpenModal(true);
    }

    function onSubmit() {
        void salvar(colaboradorAfastamento);
    }

    return (
        <>
            <PaginaCadastro
                funcaoAtualizarLista={refresh}
                funcaoNovoCadastro={novoCadastro}
            >
                <Table
                    funcaoAtualizarLista={refresh}
                    lista={listaEntidade}
                    colunas={colaboradorAfastamentoColunas}/>
            </PaginaCadastro>

            <Modal isOpen={isOpenModal}
                   setIsOpen={setIsOpenModal}
                   title={`Afastamento`}>
                <Form onSubmit={onSubmit} className={`min-h-[100%]`}>
                    <div className={`flex flex-col gap-6`}>
                        <BuscaColaborador entidade={colaboradorAfastamento}
                                          atributo={`colaborador`}
                                          idColaborador={idColaborador}/>
                        <LineContent>
                            <InputDataCompleta
                                label={`Data Afastamento`}
                                atributo={'dataAfastamento'}
                                entidade={colaboradorAfastamento}/>
                        </LineContent>
                    </div>
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