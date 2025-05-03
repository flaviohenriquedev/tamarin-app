'use client'

import {useEffect, useState} from 'react'
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'lucide-react'

interface DualListBoxProps {
    itens: string[]
    tituloEsquerda?: string
    tituloDireita?: string
}

export function DualListBox2({
                                itens,
                                tituloEsquerda = 'Disponíveis',
                                tituloDireita = 'Selecionados'
                            }: DualListBoxProps) {
    const [disponiveis, setDisponiveis] = useState<string[]>([])
    const [selecionados, setSelecionados] = useState<string[]>([])

    useEffect(() => {
        setDisponiveis([...itens].sort())
        setSelecionados([])
    }, [itens])

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
        <div className="grid grid-cols-3 gap-6 p-4 w-full max-w-3xl mx-auto">
            {/* Lista da esquerda */}
            <div>
                <h2 className="font-bold mb-2">{tituloEsquerda}</h2>
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

            {/* Botões do meio */}
            <div className="flex flex-col items-center justify-center space-y-2">
                <button
                    onClick={addTodos}
                    className="bg-primary p-2 rounded hover:bg-accent"
                    title="Adicionar todos"
                >
                    <ChevronsRight />
                </button>
                <button
                    onClick={() => {
                        if (disponiveis.length) addItem(disponiveis[0])
                    }}
                    className="bg-primary p-2 rounded hover:bg-accent"
                    title="Adicionar um"
                >
                    <ChevronRight />
                </button>
                <button
                    onClick={() => {
                        if (selecionados.length) removeItem(selecionados[0])
                    }}
                    className="bg-primary p-2 rounded hover:bg-accent"
                    title="Remover um"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={removerTodos}
                    className="bg-primary p-2 rounded hover:bg-accent"
                    title="Remover todos"
                >
                    <ChevronsLeft />
                </button>
            </div>

            {/* Lista da direita */}
            <div>
                <h2 className="font-bold mb-2">{tituloDireita}</h2>
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
    )
}
