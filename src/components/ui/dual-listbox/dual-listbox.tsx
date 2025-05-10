'use client'

import './style.css'
import {ChevronsLeft, ChevronsRight, Minus, Plus} from "lucide-react";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {DualListboxItem} from "@/components/ui/dual-listbox/dual-listbox-item";
import {DualListboxList} from "@/components/ui/dual-listbox/dual-listbox-list";
import {DualListboxType, DualListboxValue} from "@/components/ui/dual-listbox/ts/DualListboxType";

type Props = {
    valores: DualListboxType[];
    stateRetorno: {value: DualListboxValue[], funcSet: Dispatch<SetStateAction<DualListboxValue[]>>};
}

export function DualListbox({valores, stateRetorno}: Props) {

    const [listaValoresDisponiveis, setListaValoresDisponiveis] = useState<DualListboxType[]>([])
    const [listaValoresAdicionados, setListaValoresAdicionados] = useState<DualListboxType[]>([])
    const [listaSelecionados, setListaSelecionados] = useState<DualListboxType[]>([])
    
    useEffect(() => {
        setListaValoresDisponiveis([...valores].sort((a, b) => {
            const valorA = a.label;
            const valorB = b.label;
            return valorA.localeCompare(valorB);
        }))
    }, [valores])

    useEffect(() => {

    }, []);

    function selecionarItem(item: DualListboxType) {
        if (!listaSelecionados.includes(item)) {
            setListaSelecionados((prev) => [...prev, item])
        } else {
            setListaSelecionados(prev => prev.filter(i => i !== item))
        }
    }

    function addItem(item: DualListboxType) {
        if (!listaValoresAdicionados.includes(item)) {
            setListaValoresDisponiveis(prev => prev.filter(i => i !== item))
            setListaValoresAdicionados(prev => [...prev, item]
                .sort((a, b) => {
                    const valorA = a.label;
                    const valorB = b.label;
                    return valorA.localeCompare(valorB);
                }))
            stateRetorno.funcSet((prev) => [...prev, item.value])
        }
    }
    function addTodos() {
        const novaLista = [...listaValoresAdicionados, ...listaValoresDisponiveis]
            .sort((a, b) => a.label.localeCompare(b.label))

        setListaValoresAdicionados(novaLista)
        setListaValoresDisponiveis([])
        setListaSelecionados([])
        stateRetorno.funcSet(novaLista.map(v => v.value))
    }

    function removeItem(item: DualListboxType) {
        if (!listaValoresDisponiveis.includes(item)) {
            setListaValoresAdicionados(prev => prev.filter(i => i !== item))
            stateRetorno.funcSet(prev => prev.filter(i => i !== item.value))
            setListaValoresDisponiveis(prev => [...prev, item]
                .sort((a, b) => {
                    const valorA = a.label;
                    const valorB = b.label;
                    return valorA.localeCompare(valorB);
                }))
        }
    }

    function removerTodos() {
        const novaListaDisponiveis = [...listaValoresDisponiveis, ...listaValoresAdicionados]
            .sort((a, b) => a.label.localeCompare(b.label))

        setListaValoresDisponiveis(novaListaDisponiveis)
        setListaValoresAdicionados([])
        stateRetorno.funcSet([]) // continua vazio, já que você limpou os adicionados
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