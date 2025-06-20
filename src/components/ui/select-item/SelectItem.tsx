import React, {useEffect, useRef, useState} from "react";
import {SelectItemValue} from "@/components/ui/select-item/SelectItemValue";
import {IoIosArrowDown} from "react-icons/io";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {Asterisk} from "lucide-react";
import {get, set} from "lodash";
import {MdClear} from "react-icons/md";
import {AnimatePresence, motion} from "framer-motion";
import clsx from "clsx";

type Props<E> = {
    entidade: E;
    fieldValor: string;
    values: TSelectItem[];
    onSelect?: (value: TSelectItem | null) => void;
    widthClass?: string;
    valorPadrao?: TSelectItem;
    label?: string;
    name?: string;
    required?: boolean;
    tabIndex?: number;
}

export function SelectItem<E extends object>({
                                                 entidade,
                                                 fieldValor,
                                                 values,
                                                 widthClass,
                                                 onSelect,
                                                 valorPadrao,
                                                 label,
                                                 name,
                                                 required,
                                                 tabIndex
                                             }: Props<E>) {
    const [showList, setShowList] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState<TSelectItem | undefined>(valorPadrao);
    const refContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (values && values.length > 0) {
            const valorEntidade = get(entidade, fieldValor)
            if (valorEntidade) setItemSelecionado(values.find(v => v.value === valorEntidade));
        }
    }, [entidade, fieldValor, values]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setShowList(false);
            }
        }

        function handleClickOutside(e: MouseEvent) {
            if (refContainer.current && !refContainer.current.contains(e.target as Node)) {
                setShowList(false);
            }
        }

        if (showList) {
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showList]);

    function handleShowList() {
        setShowList(!showList);
    }

    function handleSelectItem(valor: TSelectItem) {
        setItemSelecionado(valor);
        if (onSelect) onSelect(valor)
        setShowList(false);
    }

    function renderItens() {
        return values.map(value => {
            return <SelectItemValue key={value.value as string}
                                    setItemSelecionado={handleSelectItem}
                                    valor={value}/>
        })
    }

    function getLabel(item: TSelectItem | undefined) {
        if (item) {
            return (<label>{item.labelWhenSelected ? item.labelWhenSelected : item.label}</label>)
        }
        return <label className={`text-neutral-400`}>Selecione</label>;
    }

    function clear() {
        setItemSelecionado(undefined);
        if (onSelect) onSelect(null);
        if (entidade) set(entidade, fieldValor, null)
    }

    return (

        <div ref={refContainer}
             className={`
            flex-1
            flex
            flex-col
            gap-1`}>
            {label && (
                <label
                    htmlFor={name ? name : ''}
                    className="flex items-center font-semibold text-gray-500 gap-1 text-[9pt] pl-1">
                    {required && <span className={`text-error `}><Asterisk size={12}/></span>}
                    {label}
                </label>
            )}
            <div className={`relative ${widthClass ? widthClass : 'min-w-52'}`}>
                <div
                    tabIndex={tabIndex}
                    className={`
                    input
                    bg-transparent
                    input-md
                    ${widthClass ? widthClass : 'min-w-52 w-full'}
                    rounded-lg
                    border-base-300
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
                >
                    <div onClick={handleShowList} className={`py-4 flex items-center w-full h-full `}>
                        {getLabel(itemSelecionado)}
                    </div>
                    <div className={`flex items-center gap-2 text-neutral-500`}>
                        {itemSelecionado && (
                            <label className={`
                            cursor-pointer
                            rounded-full
                            border-2
                            border-transparent
                            transition-all ease-in-out
                            duration-300
                            active:scale-75
                            hover:shadow-md
                            hover:border-primary`}><MdClear size={18} onClick={clear}/></label>
                        )}
                        <IoIosArrowDown
                            className={`transition-transform duration-300 ${showList ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {showList && (
                        <motion.ul
                            className={clsx(
                                `   z-50
                                    border
                                    px-3
                                    border-base-300
                                    bg-base-100
                                    text-base-content
                                    absolute
                                    left-0
                                    top-full
                                    mt-1
                                    overflow-hidden
                                    shadow-sm
                                    p-2
                                    rounded-lg
                                    text-[10pt]
                                    `,
                                widthClass ? 'truncate' : 'w-full'
                            )}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.1, ease: "easeOut"}}
                        >
                            {renderItens()}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
