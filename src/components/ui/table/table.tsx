import {ColumnType} from "@/types/_root/ColumnType";
import {get} from "lodash";
import {useContext, useEffect} from "react";
import {ClienteContext} from "@/context/cliente-context";
import {MascaraTipoDado} from "@/enums/TipoDadoEnum";

type Props<E> = {
    funcaoAtualizarLista: () => void;
    lista: E[];
    colunas: ColumnType[];
    funcaoEditar?: (entidade: E) => void;
    funcaoDeletar?: (entidade: E) => void;
}

export function Table<E extends object>({funcaoAtualizarLista, lista, colunas, funcaoEditar}: Props<E>) {

    const {cliente} = useContext(ClienteContext)

    function renderHead() {
        return colunas ? colunas.map((coluna, index) => {
            return <th key={index} className={`text-sm`}>{coluna.descricao}</th>
        }) : <></>
    }

    useEffect(() => {
        funcaoAtualizarLista();
    }, [cliente, funcaoAtualizarLista]);

    function renderRow() {
        return lista && lista.length > 0 ? lista.map(item => {
            return (
                <tr key={Math.random()}
                    className={`text-xs`}>
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

    function renderRowItem(row: E) {
        return colunas.map((coluna, index) => {
            return (
                <td key={`${index.toString()}-${coluna.descricao}`}>
                    {getValor(row, coluna)}
                </td>
            )
        })
    }

    function getValor<E>(row: E, coluna: ColumnType) {
        let valor = get(row, coluna.field);
        if (coluna.tipoDado) {
            valor = MascaraTipoDado.executar(valor, coluna.tipoDado);
        }
        return valor;
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