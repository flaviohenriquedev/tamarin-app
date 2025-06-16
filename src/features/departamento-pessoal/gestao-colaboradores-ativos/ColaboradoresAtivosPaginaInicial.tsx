'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {ColaboradorService} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/ColaboradorService";
import Modal from "@/components/ui/modal/modal";
import {useCallback} from "react";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {CardColaborador} from "@/features/departamento-pessoal/gestao-colaboradores-ativos/CardColaborador";

const colaboradorService = new ColaboradorService();

export function ColaboradoresAtivosPaginaInicial() {

    const clear = useCallback(() => {
        console.log('executado')
    }, [])

    const {
        listaEntidade,
        reload,
        openModal,
        setOpenModal
    } = usePaginaCadastro<Colaborador, ColaboradorService>({
        service: colaboradorService,
        onCloseModal: clear
    });

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={reload}>
                <div className={`flex flex-col gap-2`}>
                    {listaEntidade && listaEntidade.map((element) => (
                        <CardColaborador key={element.id} colaborador={element} />
                    ))}
                </div>
            </PaginaCadastro>
            <Modal title={'Admissão'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}>
                <div>
                    <label>MODAL</label>
                </div>
            </Modal>
        </>
    )
}