'use client'

import {CrudService} from "@/services/CrudService";
import {useCallback, useEffect, useState} from "react";
import {AcaoSalvar} from "@/features/sistema/types";
import {PageConfig} from "@/components/ui/table/ts/types";

type Props<E, S extends CrudService<E>> = {
    service: S;
    onCloseModal?: () => void;
    iniciarModalAberto?: boolean;
}

export default function usePaginaCadastro<E, S extends CrudService<E>>({
                                                                           service,
                                                                           onCloseModal,
                                                                           iniciarModalAberto = false
                                                                       }: Props<E, S>) {

    const [listaEntidade, setListaEntidade] = useState<E[]>([]);
    const [atualizarLista, setAtualizarLista] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(iniciarModalAberto);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()
    const [take, setTake] = useState<number>(15)
    const [skip, setSkip] = useState<number>(0)
    const [totalRegistros, setTotalRegistros] = useState<number>()

    useEffect(() => {
        setTake(15)
        setSkip(0)
    }, []);

    useEffect(() => {
        async function fetchData() {
            await service.listar().then(result => {
                setListaEntidade(result);
                setTotalRegistros(result.length)
            })
        }
        fetchData().then();
    }, [atualizarLista, service]);

    useEffect(() => {
        if (!isOpenModal && onCloseModal) onCloseModal();
    }, [onCloseModal, isOpenModal]);
    
    const refresh = useCallback(() =>  {
        console.log(`REFRESHADO`)
        setAtualizarLista(true);
    }, [])

    const salvar = async (entidade: E) => {
        return await service.salvar(entidade).then(() => {
            refresh();
            if (acaoSalvar === 'SAVE_AND_CLOSE') setIsOpenModal(false);
        });
    }

    const pageConfig: PageConfig = {
        take,
        skip,
        setSkip,
        setTake,
        totalRegistros: totalRegistros ?? 0, // se quiser evitar undefined
    };

    return {
        listaEntidade,
        refresh,
        salvar,
        isOpenModal,
        setIsOpenModal,
        setAcaoSalvar,
        pageConfig,
    }
};