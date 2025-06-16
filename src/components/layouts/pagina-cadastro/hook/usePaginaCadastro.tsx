'use client'

import {CrudService} from "@/services/crud-service";
import {useCallback, useEffect, useState} from "react";

type Props<E, S extends CrudService<E>> = {
    service: S;
    onCloseModal?: () => void;
}

export default function usePaginaCadastro<E, S extends CrudService<E>>({
                                                                           service,
                                                                           onCloseModal
                                                                       }: Props<E, S>) {

    const [listaEntidade, setListaEntidade] = useState<E[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            await service.listar().then(result => {
                setListaEntidade(result);
            })
        }
        fetchData().then();
    }, [atualizarLista, service]);

    useEffect(() => {
        if (!isOpenModal && onCloseModal) onCloseModal();
    }, [onCloseModal, isOpenModal]);
    
    const refresh = useCallback(() =>  {
        setAtualizarLista(true);
    }, [])

    return {
        listaEntidade,
        refresh,
        isOpenModal,
        setIsOpenModal,
    }
};