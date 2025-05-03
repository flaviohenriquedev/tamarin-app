'use client'

import {EntidadePadrao} from "@/class/EntidadePadrao";
import {TColuna} from "@/types/TColuna";

type Props<E extends EntidadePadrao> = {
    lista: E[];
    colunas: TColuna[];
    funcaoEditar?: (entidade: E) => void;
    funcaoDeletar?: (entidade: E) => void;
}

export function Table<E extends EntidadePadrao>({lista, colunas, funcaoEditar, funcaoDeletar}: Props<E>) {

    function renderHead() {
        return colunas ? colunas.map((coluna, index) => {
            return <th key={index}>{coluna.descricao}</th>
        }) : <></>
    }

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
        </>
    )
}