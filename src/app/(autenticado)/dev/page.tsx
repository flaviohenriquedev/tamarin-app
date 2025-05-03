import {DualListbox} from "@/components/ui/dual-listbox/dual-listbox";

export default function PaginaDev() {
    const itens = ['Banana', 'Maçã', 'Uva', 'Laranja', 'Abacaxi']

    return (
        <div className="flex flex-col p-8">
            {/*<DualListBox2 itens={itens} />*/}
            <DualListbox />
        </div>
    )
}