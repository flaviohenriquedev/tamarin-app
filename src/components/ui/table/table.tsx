'use client'

import {useCallback, useState} from "react";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Coluna} from "@/types/Coluna";
import {openModal} from "@/utils/utils";

type Props<E extends EntidadePadrao> = {
    lista: E[];
    colunas: Coluna[];
    funcaoEditar?: (entidade: E) => void;
    funcaoDeletar?: (entidade: E) => void;
}

export function Table<E extends EntidadePadrao>({lista, colunas, funcaoEditar, funcaoDeletar}: Props<E>) {
    const [entidadeParaDeletar, setEntidadeParaDeletar] = useState<E | null>(null);

    function renderHead() {
        return colunas ? colunas.map((coluna, index) => {
            return <th key={index}>{coluna.descricao}</th>
        }) : <></>
    }

    const abrirConfirmacaoDeExclusao = useCallback(
        (entidade: E) => {
            setEntidadeParaDeletar(entidade);
            setTimeout(() => openModal("modal_delete"), 0);
        },
        []
    );

    function renderRow() {
        return lista && lista.length > 0 ? lista.map(item => {
            return (
                <tr key={Math.random()}>
                    {renderRowItem(item)}
                    {funcaoEditar && (
                        <td>
                            <button onClick={() => funcaoEditar(item)}
                                    className={`hover:cursor-pointer`}>Editar
                            </button>
                        </td>
                    )}

                    {funcaoDeletar && (
                        <td>
                            <button onClick={() => abrirConfirmacaoDeExclusao(item)}
                                    className={`hover:cursor-pointer`}>Excluir
                            </button>
                        </td>
                    )}
                </tr>
            )
        }) : <tr>
            <td>Nenhum dado encontrado</td>
        </tr>
    }

    function renderRowItem(row: any) {
        return colunas.map((coluna, index) => {
            return (
                <td key={`${index.toString()}-${coluna.descricao}`}>
                    {row[coluna.field]}</td>
            )
        })
    }

    return (
        <>
            <div className="rounded-box border border-base-content/5 bg-base-100 h-screen overflow-x-auto">
                <table className="table table-pin-rows">
                    <thead>
                    <tr>
                        {renderHead()}
                    </tr>
                    </thead>
                    <tbody>
                    {renderRow()}
                    </tbody>
                </table>
            </div>

            {/*{entidadeParaDeletar && (*/}
            {/*    <Modal idModal="modal_delete">*/}
            {/*        <label>Tem certeza que deseja excluir esse registro?</label>*/}
            {/*        {funcaoDeletar && (*/}
            {/*            <Button descricao="Sim" onClick={() => funcaoDeletar(entidadeParaDeletar)} />*/}
            {/*        )}*/}
            {/*        <Button descricao="Não" tipoClasse="btn-warning" onClick={() => closeModal(`modal_delete`)}/>*/}
            {/*    </Modal>*/}
            {/*)}*/}
        </>
    )
}