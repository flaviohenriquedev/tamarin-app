'use client'

import {useCallback, useEffect, useState} from "react";
import {AcaoSalvar} from "@/features/sistema/types";
import {toast} from "sonner";
import {CrudService} from "@/services/crud-service";
import {EntidadePadrao} from "@/class/EntidadePadrao";

type Props<E extends EntidadePadrao, S extends CrudService<E>> = {
    service: S;
    novaEntidade: () => E; // função que retorna uma nova instância
}

const usePaginaCadastro = <E extends EntidadePadrao, S extends CrudService<E>>({
                                                                                   service,
                                                                                   novaEntidade
                                                                               }: Props<E, S>) => {
    const [openModal, setOpenModal] = useState(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>();
    const [entidadeCadastro, setEntidadeCadastro] = useState<E>(novaEntidade);
    const [listaEntidades, setListaEntidades] = useState<E[]>([]);
    const [loading, setLoading] = useState(false);

    const listar = useCallback(async () => {
        setLoading(true);
        try {
            const result = await service.listar();
            setListaEntidades(result);
        } finally {
            setLoading(false);
        }
    }, [service]);

    useEffect(() => {
        listar();
    }, [listar]);

    const salvar = useCallback(async () => {
        await service.salvar(entidadeCadastro, async () => {
            toast.success("Registro salvo com sucesso.");
            setEntidadeCadastro(novaEntidade());
            await listar();
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        });
    }, [service, entidadeCadastro, acaoSalvar, listar, novaEntidade]);

    const consultar = (entidade: E) => {
        setEntidadeCadastro(entidade);
        setOpenModal(true);
    };

    const excluir = async (entidade: E) => {
        await service.excluir(entidade.id);
        toast.success("Cadastro deletado.");
        await listar();
    };

    const handleNovoCadastro = () => {
        setEntidadeCadastro(novaEntidade());
        setOpenModal(true);
    };

    const clear = () => {
        setEntidadeCadastro(novaEntidade());
    };

    return {
        openModal,
        setOpenModal,
        acaoSalvar,
        setAcaoSalvar,
        entidadeCadastro,
        setEntidadeCadastro,
        listaEntidades,
        salvar,
        excluir,
        consultar,
        handleNovoCadastro,
        atualizarLista: listar,
        clear,
        loading,
    };
};

export default usePaginaCadastro;
