'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {Table} from "@/components/ui/table/Table";
import {useCallback, useState} from "react";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {
    ColaboradorFeriasService
} from "@/features/departamento-pessoal/gestao/gestao-ferias/class/ColaboradorFeriasService";
import {ColaboradorFerias} from "@/features/departamento-pessoal/gestao/gestao-ferias/class/ColaboradorFerias";
import {
    colaboradorFeriasColunasListagem
} from "@/features/departamento-pessoal/gestao/gestao-ferias/ts/colaboradorFeriasColunasListagem";
import {BuscaColaborador} from "@/features/departamento-pessoal/gestao/gestao-ferias/components/BuscaColaborador";
import {
    StatusColaboradorENUM
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/enum/StatusColaboradorENUM";
import {set} from "lodash";

const colaboradorFeriasService = new ColaboradorFeriasService();

export function ColaboradorFeriasPaginaInicial() {

    const [colaboradorFerias, setColaboradorFerias] = useState<ColaboradorFerias>(new ColaboradorFerias());

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
        set(colaboradorFerias, 'colaborador.statusColaborador', StatusColaboradorENUM.FERIAS);
        salvar(colaboradorFerias).then()
    }

    function consultar(cf: ColaboradorFerias) {
        setColaboradorFerias(cf);
        setIsOpenModal(true);
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
                       colunas={colaboradorFeriasColunasListagem}
                       acoesTabela={{
                           consultar: consultar,
                       }}/>

            </PaginaCadastro>
            <Modal title={'Férias'}
                   isOpen={isOpenModal}
                   setIsOpen={setIsOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={onSubmit} className={`min-h-[100%]`}>
                    <div className={`flex flex-col gap-6`}>
                        <BuscaColaborador entidade={colaboradorFerias} atributo={`colaborador`}/>
                        <LineContent>
                            <InputDataCompleta
                                label={`Periodo Inicial`}
                                atributo={'periodoInicial'}
                                entidade={colaboradorFerias}/>

                            <InputDataCompleta
                                label={`Periodo Final`}
                                atributo={'periodoFinal'}
                                entidade={colaboradorFerias}/>

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