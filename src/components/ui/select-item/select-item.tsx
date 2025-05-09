import {useState} from "react";
import {SelectItemValue} from "@/components/ui/select-item/select-item-value";
import {IoIosArrowDown} from "react-icons/io";
import {inputStyle} from "@/components/ui/input/style";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

type Props = {
    values: TSelectItem[]
    onSelect: (value: TSelectItem) => void
}

export function SelectItem({values, onSelect}: Props) {
    const [showList, setShowList] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState<TSelectItem>();

    function handleShowList() {
        setShowList(!showList);
    }

    function handleSelectItem(valor: TSelectItem) {
        setItemSelecionado(valor);
        onSelect(valor)
        setShowList(false);
    }

    function renderItens() {
        return values.map(value => {
            return <SelectItemValue key={value.value}
                                    setItemSelecionado={handleSelectItem}
                                    valor={value}/>
        })
    }

    return (
        <div className="relative min-w-52">
            <div
                className={`
                    ${inputStyle}
                    flex
                    items-center
                    justify-between
                    cursor-default
                `}
                onClick={handleShowList}
            >
                <label>{itemSelecionado ? itemSelecionado.label : 'Selecione'}</label>
                <IoIosArrowDown
                    className={`transition-transform duration-300 ${showList ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>

            <ul
                className={`
                    z-10
                    border
                    border-base-300
                    bg-base-100
                    text-base-content
                    absolute
                    left-0
                    top-full
                    mt-1
                    overflow-hidden
                    transition-all
                    duration-300
                    w-full
                    rounded-md
                    text-[9pt]
                    ${showList ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                {renderItens()}
            </ul>
        </div>
    )
}
