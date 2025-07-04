import {ColunaType} from "@/types/_root/ColunaType";
import {get} from "lodash";
import {useContext, useEffect, useState} from "react";
import {EmpresaContext} from "@/context/useEmpresa";
import {MascaraTipoDado} from "@/enums/TipoDadoEnum";
import {AcoesTabela, PageConfig} from "@/components/ui/table/ts/types";
import {IoOpen} from "react-icons/io5";
import {MdDelete} from "react-icons/md";
import Modal from "@/components/ui/modal/Modal";
import {Button} from "@/components/ui/button/Button";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {Paginacao} from "@/components/ui/table/paginacao/Paginacao";

type Props<E> = {
    funcaoAtualizarLista: () => void;
    lista: E[];
    colunas: ColunaType[];
    acoesTabela?: AcoesTabela<E>;
    pageConfig?: PageConfig
    ocultarCheckbox?: boolean;
}

export function Table<E extends object>({
                                            funcaoAtualizarLista,
                                            lista,
                                            colunas,
                                            acoesTabela,
                                            pageConfig,
                                            ocultarCheckbox = false
                                        }: Props<E>) {

    const {empresa} = useContext(EmpresaContext)
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
    }, [empresa, funcaoAtualizarLista]);

    function renderRow() {
        return lista && lista.length > 0 ? lista.map(item => {
            return (
                <tr key={Math.random()} className={`text-base-content text-xs`}>
                    {getColunaCheck(item)}
                    {renderRowItem(item)}
                    {getAcoes(item)}
                </tr>
            )
        }) : <tr>
            <td className={'text-base-content/40'}>Nenhum dado encontrado</td>
        </tr>
    }

    function getColunaCheck(e: E) {
        return !ocultarCheckbox && (
            <td>
                <Checkbox entidade={e} atributo={'checked'}/>
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

    function getValor<E>(row: E, coluna: ColunaType) {
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

            {pageConfig && (
                <Paginacao
                    skip={pageConfig.skip}
                    take={pageConfig.take}
                    total={pageConfig.totalRegistros}
                    setSkip={pageConfig.setSkip}
                    setTake={pageConfig.setTake}
                />
            )}

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