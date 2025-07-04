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
    const [isOpenModal, setIsOpenModal] = useState<boolean>(iniciarModalAberto);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()
    const [take, setTake] = useState<number>(15)
    const [skip, setSkip] = useState<number>(0)
    const [totalRegistros, setTotalRegistros] = useState<number>()
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        setTake(15)
        setSkip(0)
    }, []);

    const fetchData = useCallback(async () => {
        await service.listar().then(result => {
            setListaEntidade(result);
            setTotalRegistros(result.length);
        })
    }, [service])

    const refresh = useCallback(() => {
        setRefreshTrigger(prev => prev + 1);
    }, []);

    useEffect(() => {
        void fetchData();
    }, [refreshTrigger, fetchData]);

    useEffect(() => {
        if (!isOpenModal && onCloseModal) onCloseModal();
    }, [onCloseModal, isOpenModal]);

    const salvar = async (entidade: E) => {
        return await service.salvar(entidade, refresh).then(() => {
            if (acaoSalvar === 'SAVE_AND_CLOSE') setIsOpenModal(false);
        });
    }

    const deletar = async (id: string) => {
        return await service.excluir(id).then(() => refresh())
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
        salvar: salvar,
        isOpenModal,
        setIsOpenModal,
        setAcaoSalvar,
        pageConfig,
        deletar
    }
};