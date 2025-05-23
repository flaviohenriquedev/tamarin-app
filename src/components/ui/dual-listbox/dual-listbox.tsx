import './style.css'
import {ChevronsLeft, ChevronsRight, Minus, Plus} from "lucide-react";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {DualListboxItem} from "@/components/ui/dual-listbox/dual-listbox-item";
import {DualListboxList} from "@/components/ui/dual-listbox/dual-listbox-list";
import {DualListboxType, DualListboxValue} from "@/components/ui/dual-listbox/ts/DualListboxType";

type Props = {
    listaA: DualListboxType[];
    listaB: DualListboxType[];
    onAddValor: (valor: DualListboxType) => void;
    valores?: DualListboxType[];
    stateRetorno: {
        value: DualListboxValue[],
        funcSet: Dispatch<SetStateAction<DualListboxValue[]>>
    };
}

export function DualListbox({listaA, listaB, onAddValor}: Props) {
    const [listaDisponiveis, setListaDisponiveis] = useState<DualListboxType[]>([]);
    const [listaAdicionados, setListaAdicionados] = useState<DualListboxType[]>([]);
    const [selecionados, setSelecionados] = useState<DualListboxValue[]>([]);
    const [filtroDisponiveis, setFiltroDisponiveis] = useState('');
    const [filtroAdicionados, setFiltroAdicionados] = useState('');

    useEffect(() => {
        const apenasDisponiveis = listaA.filter(itemA =>
            !listaB.some(itemB => itemB.value === itemA.value)
        );
        const ordenados = apenasDisponiveis.sort((a, b) => a.label.localeCompare(b.label));
        setListaDisponiveis(ordenados);
        setListaAdicionados([...listaB].sort((a, b) => a.label.localeCompare(b.label)));
    }, [listaA, listaB]);

    function alternarSelecao(item: DualListboxType) {
        const existe = selecionados.includes(item.value);
        setSelecionados(prev =>
            existe ? prev.filter(v => v !== item.value) : [...prev, item.value]
        );
    }

    function addItem(item: DualListboxType) {
        if (listaAdicionados.some(i => i.value === item.value)) return;

        const novaListaAdicionados = [...listaAdicionados, item].sort((a, b) => a.label.localeCompare(b.label));
        const novaListaDisponiveis = listaDisponiveis.filter(i => i.value !== item.value);

        setListaAdicionados(novaListaAdicionados);
        setListaDisponiveis(novaListaDisponiveis);
        setSelecionados(prev => prev.filter(v => v !== item.value));
        onAddValor(item);
    }

    function removeItem(item: DualListboxType) {
        const novaListaDisponiveis = [...listaDisponiveis, item].sort((a, b) => a.label.localeCompare(b.label));
        const novaListaAdicionados = listaAdicionados.filter(i => i.value !== item.value);

        setListaDisponiveis(novaListaDisponiveis);
        setListaAdicionados(novaListaAdicionados);
        setSelecionados(prev => prev.filter(v => v !== item.value));
    }

    function addTodos() {
        const novaListaAdicionados = [...listaAdicionados, ...listaDisponiveis].sort((a, b) => a.label.localeCompare(b.label));
        setListaAdicionados(novaListaAdicionados);
        setListaDisponiveis([]);
        setSelecionados([]);
    }

    function removerTodos() {
        const novaListaDisponiveis = [...listaDisponiveis, ...listaAdicionados].sort((a, b) => a.label.localeCompare(b.label));
        setListaDisponiveis(novaListaDisponiveis);
        setListaAdicionados([]);
        setSelecionados([]);
    }

    const disponiveisFiltrados = listaDisponiveis.filter(i =>
        i.label.toLowerCase().includes(filtroDisponiveis.toLowerCase())
    );

    const adicionadosFiltrados = listaAdicionados.filter(i =>
        i.label.toLowerCase().includes(filtroAdicionados.toLowerCase())
    );

    return (
        <div className="dl-container w-full border rounded-sm bg-base-200 border-base-content/10 p-2 flex gap-4">
            {/* Coluna da esquerda (disponíveis) */}
            <div className="dl-left flex flex-col rounded-sm bg-base-100 w-full">
                <input
                    placeholder="Filtrar..."
                    value={filtroDisponiveis}
                    onChange={e => setFiltroDisponiveis(e.target.value)}
                    className="w-full mb-2 px-2 py-1 rounded border border-base-content/20"
                />
                <DualListboxList>
                    {disponiveisFiltrados.map((item, index) => (
                        <DualListboxItem
                            key={index}
                            item={item}
                            destaque={selecionados.includes(item.value)}
                            action={addItem}
                            onClick={alternarSelecao}
                            icon={<Plus size={18} className="text-success cursor-pointer"/>}
                        />
                    ))}
                </DualListboxList>
            </div>

            {/* Botões centrais */}
            <div className="dl-middle flex flex-col items-center justify-center gap-3">
                <div onClick={addTodos}
                     className="flex items-center justify-center w-8 h-8 rounded-full bg-success cursor-pointer">
                    <ChevronsRight size={18}/>
                </div>
                <div onClick={removerTodos}
                     className="flex items-center justify-center w-8 h-8 rounded-full bg-error cursor-pointer">
                    <ChevronsLeft size={18}/>
                </div>
            </div>

            {/* Coluna da direita (adicionados) */}
            <div className="dl-right flex bg-base-100 flex-col rounded-sm w-full">
                <input
                    placeholder="Filtrar..."
                    value={filtroAdicionados}
                    onChange={e => setFiltroAdicionados(e.target.value)}
                    className="w-full mb-2 px-2 py-1 rounded border border-base-content/20"
                />
                <DualListboxList>
                    {adicionadosFiltrados.map((item, index) => (
                        <DualListboxItem
                            key={index}
                            item={item}
                            action={removeItem}
                            icon={<Minus size={18} className="text-error cursor-pointer"/>}
                        />
                    ))}
                </DualListboxList>
            </div>
        </div>
    );
}
