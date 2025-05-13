import {SetStateAction, useEffect, useState} from "react";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {FuncionalidadeEnum, FuncionalidadeEnumFactory} from "@/enums/FuncionalidadeEnum";
import {RouteType} from "@/types/_root/RouteType";
import {PermissoesSubrotas} from "@/features/manager/usuario/permissoes-subrotas";
import {Ellipsis, Eye, ListChecks, PencilRuler} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";
import Modal from "@/components/ui/modal/modal";
import {Checkbox} from "@/components/ui/checkbox/checkbox";

type Props = {
    modulo: RouteType,
    statePerfilRotas: { val: PerfilSistemaModulo[], func: (valor: SetStateAction<PerfilSistemaModulo[]>) => void }
}

export function ComponentePerfilSistemaModulosItens({modulo, statePerfilRotas}: Props) {
    const [openListSubRoute, setOpenListSubRoute] = useState<boolean>(false);
    const [funcionalidadeSelecionada, setFuncionalidadeSelecionada] = useState<TSelectItem>()
    const [mostrarListaPermissoes, setMostrarListaPermissoes] = useState<boolean>(false)
    const [selectItemFuncionalidades, setSelectItemFuncionalidades] = useState<TSelectItem[]>(FuncionalidadeEnumFactory.getSelectItens())

    const [abrirModalFuncionalidades, setAbrirModalFuncionalidades] = useState<boolean>(false)

    useEffect(() => {
        if (selectItemFuncionalidades.length === 0) setSelectItemFuncionalidades(FuncionalidadeEnumFactory.getSelectItens())
    }, [selectItemFuncionalidades.length])

    function renderizarSubrotas(subrotas: RouteType[]) {
        return subrotas.map(rota => {
            return (
                <PermissoesSubrotas
                    key={rota.title}
                    rota={rota}
                    statePerfilRotas={statePerfilRotas}>
                    {rota.subRoute && (
                        <ul className={`pl-32`}>
                            {renderizarSubrotas(rota.subRoute)}
                        </ul>
                    )}
                </PermissoesSubrotas>
            )
        })
    }

    return (
        <>
            <li key={modulo.title} className={`flex flex-col gap-1 px-2 py-1`}>
                <div className={`flex items-center gap-3`}>
                    {modulo.subRoute ? (
                        <div className={`cursor-pointer`} onClick={() => setOpenListSubRoute(!openListSubRoute)}>
                            <ListChecks size={15}/>
                        </div>
                    ) : (
                        <div className={`relative`}>
                            <div className={`
                            flex
                            text-[7pt]
                            font-semibold
                            items-center
                            justify-center
                            rounded-xs
                            cursor-pointer
                            py-[.1rem]
                            ${funcionalidadeSelecionada ? funcionalidadeSelecionada.styleClass : 'bg-base-300'}`}
                                 onClick={() => {
                                     setAbrirModalFuncionalidades(true)
                                 }}>
                                <div className={`flex h-fill w-fill items-center justify-center`}>
                                    {funcionalidadeSelecionada && funcionalidadeSelecionada.value as FuncionalidadeEnum === FuncionalidadeEnum.SOMENTE_LEITURA ? (
                                        <Eye size={15}/>
                                    ) : funcionalidadeSelecionada && funcionalidadeSelecionada.value as FuncionalidadeEnum === FuncionalidadeEnum.EDITAR ? (
                                        <PencilRuler size={15}/>
                                    ) : <Ellipsis size={15}/>}
                                </div>
                            </div>
                            <AnimatePresence initial={false}>
                                {mostrarListaPermissoes && (
                                    <motion.ul
                                        className="absolute flex flex-col gap-2 top-full w-32 p-2 z-10 bg-base-100 shadow-[-5px_5px_7px_0px_rgba(0,_0,_0,_0.1)] rounded-md overflow-hidden"
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 'auto', opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{duration: 0.1}}
                                    >
                                        {funcionalidadeSelecionada && (
                                            <li onClick={() => {
                                                setFuncionalidadeSelecionada(undefined)
                                                setMostrarListaPermissoes(false)
                                            }}
                                                className="cursor-pointer rounded-md bg-base-300 text-warning hover:bg-base-200 p-1">
                                                Limpar
                                            </li>
                                        )}
                                        {selectItemFuncionalidades && selectItemFuncionalidades.map((funcionalidade) => (
                                            <li key={funcionalidade.value}
                                                className={`
                                                            cursor-pointer
                                                            rounded-md
                                                            bg-red-300
                                                            p-1
                                                            border-2
                                            ${funcionalidade.value === funcionalidadeSelecionada?.value ? `bg-primary/15
                                                        border-primary
                                                        text-base-content
                                                       ` : 'hover:bg-base-200 border-transparent text-gray-400'}
                                        `}
                                                onClick={() => {
                                                    setFuncionalidadeSelecionada(funcionalidade)
                                                    setMostrarListaPermissoes(false)
                                                }}>
                                                <Checkbox entidade={funcionalidade} atributo={'checked'} />
                                                {funcionalidade.label}
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                    <label className={`text-sm`}>{modulo.title}</label>
                </div>
                {openListSubRoute && modulo.subRoute && (
                    <ul className={`pl-2`}>
                        {renderizarSubrotas(modulo.subRoute)}
                    </ul>
                )}
            </li>
            <Modal isOpen={abrirModalFuncionalidades} setIsOpen={setAbrirModalFuncionalidades}>
                Teste
            </Modal>
        </>
    )
}
