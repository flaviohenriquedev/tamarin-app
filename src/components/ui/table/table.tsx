import {ColumnType} from "@/types/_root/ColumnType";
import {get} from "lodash";
import {useContext, useEffect} from "react";
import {ClienteContext} from "@/context/cliente-context";
import {MascaraTipoDado} from "@/enums/TipoDadoEnum";
import {AcoesTabela} from "@/components/ui/table/ts/types";
import {IoOpen} from "react-icons/io5";
import {MdDelete} from "react-icons/md";

type Props<E> = {
    funcaoAtualizarLista: () => void;
    lista: E[];
    colunas: ColumnType[];
    funcaoEditar?: (entidade: E) => void;
    funcaoDeletar?: (entidade: E) => void;
    acoesTabela?: AcoesTabela<E>
}

export function Table<E extends object>({funcaoAtualizarLista, lista, colunas, acoesTabela}: Props<E>) {

    const {cliente} = useContext(ClienteContext)


    function renderHead() {
        return colunas ? colunas.map((coluna, index) => {
            return <th key={index}>{coluna.descricao}</th>
        }) : <></>
    }

    useEffect(() => {
        funcaoAtualizarLista();
    }, [cliente, funcaoAtualizarLista]);

    function renderRow() {
        return lista && lista.length > 0 ? lista.map(item => {
            return (
                <tr key={Math.random()}>
                    {renderRowItem(item)}
                    {getAcoes(item)}
                </tr>
            )
        }) : <tr>
            <td>Nenhum dado encontrado</td>
        </tr>
    }

    function getAcoes(e: E) {
        if (acoesTabela) {
            return (
                <td className={`flex items-center gap-4`}>
                    {getAcaoConsultar(e)}
                    {getAcaoExcluir(e)}
                </td>
            )
        }
    }

    function getAcaoConsultar(e: E) {
        if (acoesTabela?.consultar) {
            return (
                <button className={'cursor-pointer text-info'} onClick={() => acoesTabela.consultar ? acoesTabela.consultar(e) : null}>
                    <IoOpen size={20} />
                </button>
            )
        }
    }

    function getAcaoExcluir(e: E) {
        if (acoesTabela?.excluir) {
            return (
                <button className={'cursor-pointer text-error'}  onClick={() => acoesTabela.excluir ? acoesTabela.excluir(e) : null}>
                    <MdDelete size={20} />
                </button>
            )
        }
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