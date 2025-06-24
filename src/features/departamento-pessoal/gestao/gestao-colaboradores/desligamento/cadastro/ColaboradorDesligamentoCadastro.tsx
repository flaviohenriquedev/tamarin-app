'use client'

import {Fragment, useCallback, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import Modal from "@/components/ui/modal/modal";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {DesligamentoService} from "@/app/(autenticado)/app/dp/gestao/desligamento/cadastro/service/DesligamentoService";
import {Desligamento} from "@/app/(autenticado)/app/dp/gestao/desligamento/cadastro/entidade/Desligamento";

const desligamentoService = new DesligamentoService();

export function ColaboradorDesligamentoCadastro() {
    const [desligamento, setDesligamento] = useState<Desligamento>(new Desligamento());

    const clear = useCallback(() => {
        setDesligamento(new Desligamento());
    }, [])

    const {
        listaEntidade,
        isOpenModal,
        setIsOpenModal,
        refresh,
        salvar,
        setAcaoSalvar,
        pageConfig
    } = usePaginaCadastro<Desligamento, DesligamentoService>({
        service: desligamentoService,
        onCloseModal: clear
    })

    const novo = useCallback(() => {
        setIsOpenModal(true);
    }, [setIsOpenModal])

    function onSubmit() {
        salvar(desligamento).then()
    }
    return (
        <>
            <PaginaCadastro funcaoNovoCadastro={novo}>
                <div>Cadastro Desligamento</div>
            </PaginaCadastro>

            <Modal isOpen={isOpenModal}
                   setIsOpen={setIsOpenModal}>
                <div>
                    Cadastro
                </div>
            </Modal>
        </>
    )
}