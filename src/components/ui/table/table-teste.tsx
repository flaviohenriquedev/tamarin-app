import {ColumnType} from "@/types/_root/ColumnType";
import {AcoesTabela} from "@/components/ui/table/ts/types";

type Props<E> = {
    funcaoAtualizarLista: () => void;
    lista: E[];
    colunas: ColumnType[];
    funcaoEditar?: (entidade: E) => void;
    funcaoDeletar?: (entidade: E) => void;
    acoesTabela?: AcoesTabela<E>
}


export function TableTeste<E extends object>({funcaoAtualizarLista, lista, colunas, acoesTabela}: Props<E>) {

    // const {cliente} = useContext(ClienteContext)
    // const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
    // const [entidadeParaDeletar, setEntidadeParaDeletar] = useState<E>()
    //
    // useEffect(() => {
    //     funcaoAtualizarLista();
    // }, [cliente, funcaoAtualizarLista]);
    //
    // function renderHead() {
    //     return colunas ? colunas.map((col) => (
    //         <div key={col.descricao} className="p-2 border-r last:border-r-0">
    //             {col.descricao}
    //         </div>
    //     )) : <></>
    // }
    //
    // function renderRow() {
    //     return lista && lista.length > 0 ? lista.map((row, rowIndex) => (
    //         <div
    //             key={rowIndex}
    //             className="grid grid-flow-col auto-cols-fr border-t"
    //         >
    //             {renderRowItem(row)}
    //         </div>
    //     )) : <tr>
    //         <td>Nenhum dado encontrado</td>
    //     </tr>
    // }
    //
    // function renderRowItem(row: E) {
    //     return colunas.map((cell, index) => (
    //         <div key={`${index.toString()}-${cell.descricao}`}
    //              className="p-2 border-r last:border-r-0">
    //             {getValor(row, cell)}
    //         </div>
    //     ))
    // }
    //
    // function getAcoes(e: E) {
    //     if (acoesTabela) {
    //         return (
    //             <td className={`flex items-center gap-4`}>
    //                 {getAcaoConsultar(e)}
    //                 {getAcaoExcluir(e)}
    //             </td>
    //         )
    //     }
    // }
    //
    // function getAcaoConsultar(e: E) {
    //     if (acoesTabela?.consultar) {
    //         return (
    //             <button className={'cursor-pointer text-info'}
    //                     onClick={() => acoesTabela.consultar ? acoesTabela.consultar(e) : null}>
    //                 <IoOpen size={20}/>
    //             </button>
    //         )
    //     }
    // }
    //
    // function getValor<E>(row: E, coluna: ColumnType) {
    //     let valor = get(row, coluna.field);
    //     if (coluna.tipoDado) {
    //         valor = MascaraTipoDado.executar(valor, coluna.tipoDado);
    //     }
    //     return valor;
    // }
    //
    // function handleOpenModalDelete(e: E) {
    //     setEntidadeParaDeletar(e);
    //     setOpenModalDelete(true);
    // }
    //
    // function excluirEntidade() {
    //     if (acoesTabela && acoesTabela.excluir && entidadeParaDeletar) acoesTabela.excluir(entidadeParaDeletar);
    //     setOpenModalDelete(false);
    // }
    //
    // function getAcaoExcluir(e: E) {
    //     if (acoesTabela?.excluir) {
    //         return (
    //             <button className={'cursor-pointer text-error'}
    //                     onClick={() => handleOpenModalDelete(e)}>
    //                 <MdDelete size={20}/>
    //             </button>
    //         )
    //     }
    // }
    //
    // return (
    //     // auto-cols-max ---- para que o tamanho das colunas não se extenda automaticamente
    //     <>
    //         <div className="border rounded overflow-hidden text-sm">
    //             {/* Cabeçalho */}
    //             <div className="grid grid-flow-col auto-cols-fr bg-gray-200 font-semibold text-gray-700">
    //                 {renderHead()}
    //             </div>
    //
    //             {/* Linhas */}
    //             {renderRow()}
    //         </div>
    //
    //         {entidadeParaDeletar && acoesTabela && (
    //             <Modal
    //                 isOpen={openModalDelete}
    //                 setIsOpen={setOpenModalDelete}
    //                 title={`Atenção`}>
    //                 <div className={`p-4 flex flex-col gap-2`}>
    //                     <span>Tem certeza que deseja excluir esse registro?</span>
    //                     <ButtonGroup>
    //                         <Button buttonSize={`sm`} buttonStyle={`success`}
    //                                 onClick={() => excluirEntidade()}>Sim</Button>
    //                         <Button buttonSize={`sm`} buttonStyle={`warning`}
    //                                 onClick={() => setOpenModalDelete(false)}>Não</Button>
    //                     </ButtonGroup>
    //                 </div>
    //             </Modal>
    //         )}
    //     </>
    // )
    return <div>teste</div>
}