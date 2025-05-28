import {ColumnType} from "@/types/_root/ColumnType";
import {get} from "lodash";
import {useContext, useEffect, useState} from "react";
import {ClienteContext} from "@/context/cliente-context";
import {MascaraTipoDado} from "@/enums/TipoDadoEnum";
import {AcoesTabela} from "@/components/ui/table/ts/types";
import {IoOpen} from "react-icons/io5";
import {MdDelete} from "react-icons/md";
import Modal from "@/components/ui/modal/modal";
import {Button} from "@/components/ui/button/button";
import {ButtonGroup} from "@/components/ui/button/button-group";

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
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
    const [entidadeParaDeletar, setEntidadeParaDeletar] = useState<E>()

    useEffect(() => {
        funcaoAtualizarLista();
    }, [cliente, funcaoAtualizarLista]);

    function renderHead() {
        return colunas ? colunas.map((col) => (
            <div key={col.descricao} className="p-2">
                {col.descricao}
            </div>
        )) : <></>
    }

    function renderRow() {
        return lista && lista.length > 0 ? lista.map((row, rowIndex) => (
            <div
                key={rowIndex}
                className="grid grid-flow-col auto-cols-fr bg-base-100/50 rounded-sm pl-2 py-1 hover:bg-base-100"
            >
                {renderRowItem(row)}
                {getAcoes(row)}
            </div>
        )) : <tr>
            <td>Nenhum dado encontrado</td>
        </tr>
    }

    function renderRowItem(row: E) {
        return colunas.map((cell, index) => (
            <div key={`${index.toString()}-${cell.descricao}`}
                 className="p-2 truncate whitespace-nowrap ">
                {getValor(row, cell)}
            </div>
        ))
    }

    function getAcoes(e: E) {
        if (acoesTabela) {
            return (
                <div className="flex gap-3 p-2 truncate whitespace-nowrap ">
                    {getAcaoConsultar(e)}
                    {getAcaoExcluir(e)}
                </div>
            )
        }
    }

    function getAcaoConsultar(e: E) {
        if (acoesTabela?.consultar) {
            return (
                <button className={'cursor-pointer text-info'}
                        onClick={() => acoesTabela.consultar ? acoesTabela.consultar(e) : null}>
                    <IoOpen size={20}/>
                </button>
            )
        }
    }

    function getValor<E>(row: E, coluna: ColumnType) {
        let valor = get(row, coluna.field);
        if (coluna.tipoDado) {
            valor = MascaraTipoDado.executar(valor, coluna.tipoDado);
        }
        return valor;
    }

    function handleOpenModalDelete(e: E) {
        setEntidadeParaDeletar(e);
        setOpenModalDelete(true);
    }

    function excluirEntidade() {
        if (acoesTabela && acoesTabela.excluir && entidadeParaDeletar) acoesTabela.excluir(entidadeParaDeletar);
        setOpenModalDelete(false);
    }

    function getAcaoExcluir(e: E) {
        if (acoesTabela?.excluir) {
            return (
                <button className={'cursor-pointer text-error'}
                        onClick={() => handleOpenModalDelete(e)}>
                    <MdDelete size={20}/>
                </button>
            )
        }
    }

    return (
        // auto-cols-max ---- para que o tamanho das colunas não se extenda automaticamente
        <>
            <div className="border border-transparent rounded overflow-hidden text-[9pt]">
                {/* Cabeçalho */}
                <div className="pl-2 py-2 grid grid-flow-col auto-cols-fr font-semibold text-gray-500">
                    {renderHead()}
                    <div className={`p-2`} />
                </div>

                {/* Linhas */}
                <div className={`flex flex-col gap-1`}>
                    {renderRow()}
                </div>
            </div>

            {entidadeParaDeletar && acoesTabela && (
                <Modal
                    isOpen={openModalDelete}
                    setIsOpen={setOpenModalDelete}
                    title={`Atenção`}>
                    <div className={`p-4 flex flex-col gap-2`}>
                        <span>Tem certeza que deseja excluir esse registro?</span>
                        <ButtonGroup>
                            <Button buttonSize={`sm`} buttonStyle={`success`}
                                    onClick={() => excluirEntidade()}>Sim</Button>
                            <Button buttonSize={`sm`} buttonStyle={`warning`}
                                    onClick={() => setOpenModalDelete(false)}>Não</Button>
                        </ButtonGroup>
                    </div>
                </Modal>
            )}
        </>
    )
}