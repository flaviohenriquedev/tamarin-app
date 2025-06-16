'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {ColaboradorFeriasService} from "@/features/departamento-pessoal/gestao/ferias/class/ColaboradorFeriasService";
import {Table} from "@/components/ui/table/table";
import {
    colaboradorFeriasColunasListagem
} from "@/features/departamento-pessoal/gestao/ferias/ts/colaboradorFeriasColunasListagem";
import {ColaboradorFerias} from "@/features/departamento-pessoal/gestao/ferias/class/ColaboradorFerias";
import {useCallback} from "react";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";

const colaboradorFeriasService = new ColaboradorFeriasService();

export function ColaboradorFeriasPaginaInicial() {

    const clear = useCallback(() => {

    }, [])

    const {
        listaEntidade,
        isOpenModal,
        setIsOpenModal,
        refresh,
    } = usePaginaCadastro<ColaboradorFerias, ColaboradorFeriasService>({
        service: colaboradorFeriasService,
        onCloseModal: clear
    })
    
    const novo = useCallback(() => {
        setIsOpenModal(true);
    }, [setIsOpenModal])

    return (
        <>
            <PaginaCadastro
                funcaoAtualizarLista={refresh}
                funcaoNovoCadastro={novo}
                >

                <Table funcaoAtualizarLista={refresh}
                       lista={listaEntidade}
                       colunas={colaboradorFeriasColunasListagem}/>
            </PaginaCadastro>
            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
                <Form onSubmit={() => {}}>
                    <div>Cadastro de férias</div>
                </Form>
            </Modal>
        </>
    )
}