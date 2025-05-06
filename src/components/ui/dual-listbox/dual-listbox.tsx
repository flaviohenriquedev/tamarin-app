'use client'

import './style.css'
import {ChevronsLeft, ChevronsRight, Minus, Plus} from "lucide-react";
import {useEffect, useState} from "react";
import {DualListboxItem} from "@/components/ui/dual-listbox/dual-listbox-item";
import {DualListboxList} from "@/components/ui/dual-listbox/dual-listbox-list";
import {get} from "lodash";

type Props<E> = {
    listaEntidade: E[];
    fieldLabel: string;
    listaDestino: E[];
}

export function DualListbox<E>({listaEntidade, fieldLabel, listaDestino}: Props<E>) {

    const [listaValores, setListaValores] = useState<E[]>([])
    const [listaValoresDestino, setListaValoresDestino] = useState<E[]>([])
    const [listaSelecionados, setListaSelecionados] = useState<E[]>([])

    useEffect(() => {
        setListaValores(listaEntidade)
    }, [listaEntidade]);

    useEffect(() => {
        setListaValores(listaEntidade && listaEntidade.length > 0 ? listaEntidade : listaEntidade)
        setListaValoresDestino(listaDestino && listaDestino.length > 0 ? listaDestino : [])
    }, [listaDestino, listaEntidade])

    function selecionarItem(item: E) {
        if (!listaSelecionados.includes(item)) {
            setListaSelecionados((prev) => [...prev, item])
        } else {
            setListaSelecionados(prev => prev.filter(i => i !== item))
        }
    }

    function addItem(item: E) {
        if (!listaValoresDestino.includes(item)) {
            setListaValores(prev => prev.filter(i => i !== item))
            setListaValoresDestino(prev => [...prev, item]
                .sort((a, b) => {
                    const valorA = String(get(a, fieldLabel));
                    const valorB = String(get(b, fieldLabel));
                    return valorA.localeCompare(valorB);
                }))
        }
    }

    function addTodos() {
        setListaValoresDestino(prev => [...prev, ...listaValores]
            .sort((a, b) => {
                const valorA = String(get(a, fieldLabel));
                const valorB = String(get(b, fieldLabel));
                return valorA.localeCompare(valorB);
            }))
        setListaValores([])
        setListaSelecionados([])
    }

    function removeItem(item: E) {
        if (!listaValores.includes(item)) {
            setListaValoresDestino(prev => prev.filter(i => i !== item))
            setListaValores(prev => [...prev, item]
                .sort((a, b) => {
                    const valorA = String(get(a, fieldLabel));
                    const valorB = String(get(b, fieldLabel));
                    return valorA.localeCompare(valorB);
                }))
        }
    }

    function removerTodos() {
        setListaValores(prev => [...prev, ...listaValoresDestino]
            .sort((a, b) => {
                const valorA = String(get(a, fieldLabel));
                const valorB = String(get(b, fieldLabel));
                return valorA.localeCompare(valorB);
            }))
        setListaValoresDestino([])
        setListaSelecionados([])
    }

    return (
        <div className={`dl-container w-fit border rounded border-base-content/30 p-2`}>
            <div className={`dl-left flex flex-col rounded-md bg-base-200`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <DualListboxList>
                    {listaValores && listaValores.map((item, index) => (
                        <DualListboxItem
                            key={index}
                            fieldLabel={fieldLabel}
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
                    {listaValoresDestino && listaValoresDestino.map((item, index) => (
                        <DualListboxItem
                            key={index}
                            item={item}
                            fieldLabel={fieldLabel}
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