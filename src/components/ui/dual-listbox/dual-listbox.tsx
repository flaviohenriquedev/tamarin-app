'use client'

import './style.css'
import {ChevronsLeft, ChevronsRight, CircleMinus, CirclePlus} from "lucide-react";
import {useState} from "react";

export function DualListbox() {
    const itens = ['Banana', 'Maçã', 'Uva', 'Laranja', 'Abacaxi']

    const [disponiveis, setDisponiveis] = useState<string[]>([])
    const [selecionados, setSelecionados] = useState<string[]>([])



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

    function renderItensDisponiveis() {
        return disponiveis.map(item => {
            return <li key={item}
                       onClick={() => addItem(item)}
                       className={`flex items-center justify-between px-2 py-1`}>
                {item} <CirclePlus size={15}/>
            </li>
        })
    }

    function renderItensSelecionados() {
        return selecionados.map(item => {
            return <li key={item}
                       onClick={() => removeItem(item)}
                       className={`flex items-center justify-between px-2 py-1`}>
                {item} <CircleMinus size={15}/>
            </li>
        })
    }

    return (
        <div className={`dl-container w-fit h-60`}>
            <div className={`dl-left flex flex-col bg-base-200 rounded-md`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <div className={`dl-list`}>
                    <ul className="space-y-2">
                        {disponiveis.map((item, index) => (
                            <li
                                key={index}
                                onDoubleClick={() => addItem(item)}
                                className="cursor-pointer bg-base-200 px-4 py-2 rounded shadow hover:bg-base-300 transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`dl-middle flex flex-col items-center justify-center h-full gap-2`}>
                <ChevronsRight/>
                <ChevronsLeft/>
            </div>

            <div className={`dl-right flex flex-col bg-base-200 rounded-md`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <div className={`dl-list`}>
                    <ul className="space-y-2">
                        {selecionados.map((item, index) => (
                            <li
                                key={index}
                                onDoubleClick={() => removeItem(item)}
                                className="cursor-pointer bg-green-300 px-4 py-2 rounded shadow hover:bg-green-400 transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}