'use client'

import './style.css'
import {ChevronsLeft, ChevronsRight, Minus, Plus} from "lucide-react";
import {useEffect, useState} from "react";
import {DualListboxItem} from "@/components/ui/dual-listbox/dual-listbox-item";
import {DualListboxList} from "@/components/ui/dual-listbox/dual-listbox-list";

export function DualListbox() {
    const itens = ['Banana', 'Maçã', 'Uva', 'Laranja', 'Abacaxi', 'Arroz', 'Feijão', 'Macarrão', 'Côco']

    const [disponiveis, setDisponiveis] = useState<string[]>([])
    const [selecionados, setSelecionados] = useState<string[]>([])

    useEffect(() => {
        setDisponiveis([...itens].sort())
        setSelecionados([])
    }, [])

    function addItem(item: string) {
        if (!selecionados.includes(item)) {
            setDisponiveis(prev => prev.filter(i => i !== item))
            setSelecionados(prev => [...prev, item].sort())
        }
    }

    function addTodos() {
        setSelecionados(prev => [...prev, ...disponiveis].sort())
        setDisponiveis([])
    }

    function removeItem(item: string) {
        if (!disponiveis.includes(item)) {
            setSelecionados(prev => prev.filter(i => i !== item))
            setDisponiveis(prev => [...prev, item].sort())
        }
    }

    function removerTodos() {
        setDisponiveis(prev => [...prev, ...selecionados].sort())
        setSelecionados([])
    }

    return (
        <div className={`dl-container w-fit`}>
            <div className={`dl-left flex flex-col rounded-md bg-base-200`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <DualListboxList>
                    {disponiveis.map((item, index) => (
                        <DualListboxItem key={index} item={item} onClick={addItem} icon={<Plus size={18} className={`
                            text-success
                            cursor-pointer
                            `} />}/>
                    ))}
                </DualListboxList>
            </div>

            <div className={`dl-middle flex flex-col items-center justify-center h-full gap-3 p-2`}>
                <div onClick={addTodos} className={`flex items-center justify-center w-8 h-8 rounded-full bg-base-200 cursor-pointer`}>
                    <ChevronsRight size={18}/>
                </div>
                <div onClick={removerTodos} className={`flex items-center justify-center w-8 h-8 rounded-full bg-base-200 cursor-pointer`}>
                    <ChevronsLeft size={18}/>
                </div>

            </div>

            <div className={`dl-right flex flex-col bg-base-200 rounded-md`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <DualListboxList>
                    {selecionados.map((item, index) => (
                        <DualListboxItem key={index} item={item} onClick={removeItem} icon={<Minus size={18} className={`
                            text-error
                            cursor-pointer
                            `} />}/>
                    ))}
                </DualListboxList>
            </div>
        </div>
    )
}