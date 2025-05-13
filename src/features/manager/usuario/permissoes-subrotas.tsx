import {RouteType} from "@/types/_root/RouteType";
import React, {ReactNode, SetStateAction, useEffect, useState} from "react";
import {FuncionalidadeEnum, FuncionalidadeEnumFactory} from "@/enums/FuncionalidadeEnum";
import {TSelectItem, TSelectItemValue} from "@/components/ui/select-item/ts/TSelectItem";
import {Ellipsis, Eye, PencilRuler} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {PerfilRota} from "@/features/manager/perfil/ts/perfil";
import {Checkbox} from "@/components/ui/checkbox/checkbox";

type Props = {
    children?: ReactNode;
    rota: RouteType,
    statePerfilRotas: {val: PerfilRota[], func: (valor: SetStateAction<PerfilRota[]>) => void}
}

export function PermissoesSubrotas({rota, children, statePerfilRotas}: Props) {
    const [mostrarListaPermissoes, setMostrarListaPermissoes] = useState<boolean>(false)
    const [selectItemFuncionalidades, setSelectItemFuncionalidades] = useState<TSelectItem[]>(FuncionalidadeEnumFactory.getSelectItens())
    const [funcionalidadeSelecionada, setFuncionalidadeSelecionada] = useState<TSelectItem>()

    useEffect(() => {
        if (selectItemFuncionalidades.length === 0) setSelectItemFuncionalidades(FuncionalidadeEnumFactory.getSelectItens())
    }, [selectItemFuncionalidades.length])

    // const addPerfilRota = useCallback((
    //     (idRota: string, role: TSelectItemValue) => {
    //         const perfilRota: PerfilRota = {idRota: idRota, roles: [role as string]}
    //         setPerfilRotas(pev => [...pev, perfilRota])
    //     }
    // ), [])

    const addPerfilRota = (idRota: string, role: TSelectItemValue) => {
        const perfilRota: PerfilRota = {idRota: idRota, roles: [role as string]}
        statePerfilRotas.func(pev => [...pev, perfilRota])
    }

    const removePerfilRota = (idRota: string) => {
        if (statePerfilRotas.val.map(perfil => perfil.idRota).includes(idRota)) {
            statePerfilRotas.func(prev => prev.filter(i => i.idRota !== idRota))
        }
    }

    // const selecionarFuncionalidade = useCallback((
    //     (modulo: RouteType, funcionalidade: TSelectItem) => {
    //         setFuncionalidadeSelecionada(funcionalidade)
    //         addPerfilRota(modulo.id, funcionalidade.value)
    //         setMostrarListaPermissoes(false)
    //         console.log(modulo, funcionalidade)
    //     }
    // ), [addPerfilRota])

    const selecionarFuncionalidade =  (modulo: RouteType, funcionalidade: TSelectItem) => {
        addPerfilRota(modulo.id, funcionalidade.value)
        setFuncionalidadeSelecionada(funcionalidade)
        setMostrarListaPermissoes(false)
    }

    const removerFuncionalidade =  (modulo: RouteType) => {
        removePerfilRota(modulo.id)
        setFuncionalidadeSelecionada(undefined)
        setMostrarListaPermissoes(false)
    }

    return (
        <li key={rota.title}>
            <div className={`cursor-default px-1 py-2 flex items-center gap-3 hover:bg-base-100 rounded-md`}>
                <div className={`relative`}>
                    <div className={`
                            flex
                            text-[7pt]
                            font-semibold
                            items-center
                            justify-center
                            rounded-xs
                            cursor-pointer
                            px-[.5rem]
                            py-[.1rem]
                            ${funcionalidadeSelecionada ? funcionalidadeSelecionada.styleClass : ''}`}
                         onClick={() => setMostrarListaPermissoes(!mostrarListaPermissoes)}>
                        <div className={`flex h-fill w-fill items-center justify-center`}>
                            {funcionalidadeSelecionada && funcionalidadeSelecionada.value as FuncionalidadeEnum === FuncionalidadeEnum.SOMENTE_LEITURA ? (
                                <Eye size={15} />
                            ) : funcionalidadeSelecionada && funcionalidadeSelecionada.value as FuncionalidadeEnum === FuncionalidadeEnum.EDITAR ? (
                                <PencilRuler size={15} />
                            ) : <Ellipsis size={15} />}
                        </div>
                    </div>

                    <AnimatePresence initial={false}>
                        {mostrarListaPermissoes && (
                            <motion.ul
                                className="absolute flex flex-col gap-2 top-full w-32 p-2 z-10 bg-base-100 shadow-[-5px_5px_7px_0px_rgba(0,_0,_0,_0.1)] rounded-md overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                {funcionalidadeSelecionada && (
                                    <li onClick={() => removerFuncionalidade(rota)}
                                        className="cursor-pointer rounded-md bg-base-300 text-warning hover:bg-base-200 p-1">
                                        Limpar
                                    </li>
                                )}
                                {selectItemFuncionalidades && selectItemFuncionalidades.map((funcionalidade) => (
                                    <li key={funcionalidade.value}
                                        className={`
                                            cursor-pointer
                                            rounded-md
                                            p-1
                                            border-2
                                            ${funcionalidade.value === funcionalidadeSelecionada?.value ? `bg-primary/15
                                                        border-primary
                                                        text-base-content
                                                       ` : 'hover:bg-base-200 border-transparent text-gray-400'}
                                        `}
                                        onClick={() => selecionarFuncionalidade(rota, funcionalidade)}>
                                        <Checkbox entidade={funcionalidade} atributo={'checked'} />
                                        {funcionalidade.label}
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
                {rota.title}
            </div>
            {children && children}
        </li>
    )
}