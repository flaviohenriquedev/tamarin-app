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
import {Checkbox} from "@/components/ui/checkbox/checkbox";

type Props<E> = {
    funcaoAtualizarLista: () => void;
    lista: E[];
    colunas: ColumnType[];
    funcaoEditar?: (entidade: E) => void;
    funcaoDeletar?: (entidade: E) => void;
    acoesTabela?: AcoesTabela<E>
    ocultarCheckbox?: boolean;
}

export function Table<E extends object>({funcaoAtualizarLista, lista, colunas, acoesTabela, ocultarCheckbox = false}: Props<E>) {

    const {cliente} = useContext(ClienteContext)
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
    const [entidadeParaDeletar, setEntidadeParaDeletar] = useState<E>()

    function renderHead() {
        return colunas ? colunas.map((coluna, index) => {
            return (
                <th key={index}>{coluna.descricao}</th>
            )
        }) : <></>
    }

    useEffect(() => {
        funcaoAtualizarLista();
    }, [cliente, funcaoAtualizarLista]);

    function renderRow() {
        return lista && lista.length > 0 ? lista.map(item => {
            return (
                <tr key={Math.random()}>
                    {getColunaCheck(item)}
                    {renderRowItem(item)}
                    {getAcoes(item)}
                </tr>
            )
        }) : <tr>
            <td>Nenhum dado encontrado</td>
        </tr>
    }

    function getColunaCheck(e: E) {
        return !ocultarCheckbox && (
            <td>
                <Checkbox entidade={e} atributo={'checked'} />
            </td>
        )
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
                <button className={'cursor-pointer text-info'}
                        onClick={() => acoesTabela.consultar ? acoesTabela.consultar(e) : null}>
                    <IoOpen size={20}/>
                </button>
            )
        }
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

    function handleOpenModalDelete(e: E) {
        setEntidadeParaDeletar(e);
        setOpenModalDelete(true);
    }

    function excluirEntidade() {
        if (acoesTabela && acoesTabela.excluir && entidadeParaDeletar) acoesTabela.excluir(entidadeParaDeletar);
        setOpenModalDelete(false);
    }

    return (
        <>
            <div className="rounded-box border border-base-content/5 bg-base-100 overflow-x-auto">
                <table className="table table-pin-rows">
                    <thead>
                    <tr>
                        {!ocultarCheckbox && <th><input type="checkbox"/></th>}
                        {renderHead()}
                    </tr>
                    </thead>
                    <tbody>
                    {renderRow()}
                    </tbody>
                </table>
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