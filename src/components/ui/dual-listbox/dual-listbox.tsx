'use client'

import './style.css'
import {ChevronsLeft, ChevronsRight, Minus, Plus} from "lucide-react";
import {useEffect, useState} from "react";
import {DualListboxItem} from "@/components/ui/dual-listbox/dual-listbox-item";
import {DualListboxList} from "@/components/ui/dual-listbox/dual-listbox-list";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {set} from "lodash";

type Props<E> = {
    entidade: E
    listaValores: TSelectItem[];
    atributo: string
}

export function DualListbox<E>({entidade, listaValores, atributo}: Props<E>) {

    const [listaValoresDisponiveis, setListaValoresDisponiveis] = useState<TSelectItem[]>([])
    const [listaValoresAdicionados, setListaValoresAdicionados] = useState<TSelectItem[]>([])
    const [listaSelecionados, setListaSelecionados] = useState<TSelectItem[]>([])

    useEffect(() => {
        setListaValoresDisponiveis(listaValores)
    }, [listaValores]);

    useEffect(() => {
        setListaValoresDisponiveis(listaValores && listaValores.length > 0 ? listaValores : listaValores)
        setListaValoresAdicionados([])
    }, [listaValores])

    useEffect(() => {
        if (entidade) set(entidade, atributo, listaValoresAdicionados.map(item => item.value))
    }, [atributo, entidade, listaValoresAdicionados]);

    function selecionarItem(item: TSelectItem) {
        if (!listaSelecionados.includes(item)) {
            setListaSelecionados((prev) => [...prev, item])
        } else {
            setListaSelecionados(prev => prev.filter(i => i !== item))
        }
    }

    function addItem(item: TSelectItem) {
        if (!listaValoresAdicionados.includes(item)) {
            setListaValoresDisponiveis(prev => prev.filter(i => i !== item))
            setListaValoresAdicionados(prev => [...prev, item]
                .sort((a, b) => {
                    const valorA = a.label;
                    const valorB = b.label;
                    return valorA.localeCompare(valorB);
                }))
        }
    }

    function addTodos() {
        setListaValoresAdicionados(prev => [...prev, ...listaValoresDisponiveis]
            .sort((a, b) => {
                const valorA = a.label;
                const valorB = b.label;
                return valorA.localeCompare(valorB);
            }))
        setListaValoresDisponiveis([])
        setListaSelecionados([])
    }

    function removeItem(item: TSelectItem) {
        if (!listaValoresDisponiveis.includes(item)) {
            setListaValoresAdicionados(prev => prev.filter(i => i !== item))
            setListaValoresDisponiveis(prev => [...prev, item]
                .sort((a, b) => {
                    const valorA = a.label;
                    const valorB = b.label;
                    return valorA.localeCompare(valorB);
                }))
        }
    }

    function removerTodos() {
        setListaValoresDisponiveis(prev => [...prev, ...listaValoresAdicionados]
            .sort((a, b) => {
                const valorA = a.label;
                const valorB = b.label;
                return valorA.localeCompare(valorB);
            }))
        setListaValoresAdicionados([])
        setListaSelecionados([])
    }

    return (
        <div className={`dl-container w-fit border rounded border-base-content/30 p-2`}>
            <div className={`dl-left flex flex-col rounded-md bg-base-200`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <DualListboxList>
                    {listaValoresDisponiveis && listaValoresDisponiveis.map((item, index) => (
                        <DualListboxItem
                            key={index}
                            item={item}
                            destaque={listaSelecionados.includes(item)}
                            action={addItem}
                            onClick={selecionarItem}
                            icon={<Plus size={18} className={`text-success cursor-pointer`}/>}/>
                    ))}
                </DualListboxList>
            </div>

            <div className={`dl-middle flex flex-col items-center justify-center h-full gap-3 p-2`}>
                <div onClick={addTodos}
                     className={`flex items-center justify-center w-8 h-8 rounded-full bg-base-200 cursor-pointer`}>
                    <ChevronsRight size={18}/>
                </div>
                <div onClick={removerTodos}
                     className={`flex items-center justify-center w-8 h-8 rounded-full bg-base-200 cursor-pointer`}>
                    <ChevronsLeft size={18}/>
                </div>

            </div>

            <div className={`dl-right flex flex-col rounded-md bg-base-200`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <DualListboxList>
                    {listaValoresAdicionados && listaValoresAdicionados.map((item, index) => (
                        <DualListboxItem
                            key={index}
                            item={item}
                            action={removeItem}
                            icon={<Minus size={18} className={`
                            text-error
                            cursor-pointer
                            `}/>}/>
                    ))}
                </DualListboxList>
            </div>
        </div>
    )
}