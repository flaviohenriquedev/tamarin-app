import React, {useState} from "react";
import {SelectItemValue} from "@/components/ui/select-item/select-item-value";
import {IoIosArrowDown} from "react-icons/io";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {Asterisk} from "lucide-react";

type Props = {
    values: TSelectItem[];
    onSelect: (value: TSelectItem) => void;
    widthClass?: string;
    valorPadrao?: TSelectItem;
    label?: string;
    name?: string;
    required?: boolean;
}

export function SelectItem({values, widthClass, onSelect, valorPadrao, label, name, required}: Props) {
    const [showList, setShowList] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState<TSelectItem | undefined>(valorPadrao);

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

    function getLabel(item: TSelectItem | undefined): string {
        if (item) {
            return item.labelWhenSelected ? item.labelWhenSelected : item.label;
        }
        return 'Selecione';
    }

    return (

        <div className={`
            flex-1
            flex
            flex-col
            gap-1`}>
            {label && (
                <label
                    htmlFor={name}
                    className="flex items-center font-semibold text-gray-500 gap-1 text-[9pt] pl-1">
                    {required && <span className={`text-error `}><Asterisk size={12}/></span>}
                    {label}
                </label>
            )}
            <div className={`relative ${widthClass ? widthClass : 'min-w-52'}`}>
                <div
                    className={`
                    input
                    bg-transparent
                    input-sm
                    px-3
                    py-4
                    ${widthClass ? widthClass : 'min-w-52 w-full'}
                    rounded-[.2rem]
                    border-base-200
                    shadow-none
                    focus:outline-hidden
                    focus:border-primary
                    transition-colors ease-in-out
                    duration-200
                    flex
                    items-center
                    justify-between
                    cursor-default
                `}
                    onClick={handleShowList}
                >
                    <label>{getLabel(itemSelecionado)}</label>
                    <IoIosArrowDown
                        className={`transition-transform duration-300 ${showList ? 'rotate-180' : 'rotate-0'}`}
                    />
                </div>

                {showList && (
                    <ul
                        className={`
                                    z-50
                                    border
                                    border-base-300
                                    bg-base-100
                                    text-base-content
                                    absolute
                                    left-0
                                    top-full
                                    mt-1
                                    max-h-44
                                    overflow-y-scroll
                                    transition-all
                                    duration-300
                                    shadow-md
                                    p-2
                                    ${widthClass ? 'truncate' : 'w-full'}
                                    rounded-sm
                                    text-[9pt]
                                    ${showList ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        {renderItens()}
                    </ul>
                )}
            </div>
        </div>
    )
}
