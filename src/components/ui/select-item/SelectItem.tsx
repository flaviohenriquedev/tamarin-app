import React, {useEffect, useRef, useState} from "react";
import {SelectItemValue} from "@/components/ui/select-item/SelectItemValue";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {get, set} from "lodash";
import {MdClear} from "react-icons/md";
import {AnimatePresence, motion} from "framer-motion";
import clsx from "clsx";
import {Label} from "@/components/ui/label/label";
import {ChevronDown} from "lucide-react";

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
                                                 tabIndex = 0
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
                <Label htmlFor={name ? name : ''} title={label} required={required} />
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
                    border-neutral-300
                    shadow-[-6px_5px_5px_-5px_rgba(0,_0,_0,_0.1)]
                    focus:outline-none
                    focus:border-primary
                    duration-300
                    focus:shadow-[0_0_8px_3px_rgba(0,153,255,0.2)]
                    focus:outline-hidden
                    transition-all ease-in-out
                    flex
                    items-center
                    justify-between
                    cursor-default
                `}
                >
                    <div onClick={handleShowList}
                         className={`
                                    py-4
                                    flex
                                    items-center
                                    w-full
                                    h-full
                                    `}>
                        {getLabel(itemSelecionado)}
                    </div>
                    <div className={`flex items-center gap-1 text-neutral-500`}>
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
                            hover:border-primary`}>
                                <MdClear size={18} onClick={clear}/>
                            </label>
                        )}
                        <label className={`
                            cursor-pointer
                            rounded-full
                            border-2
                            border-transparent
                            transition-all ease-in-out
                            duration-300
                            active:scale-75
                            hover:shadow-md
                            hover:border-primary${showList ? 'rotate-180' : 'rotate-0'}
                            `}><ChevronDown size={18} onClick={handleShowList}/></label>
                    </div>
                </div>

                <AnimatePresence>
                    {showList && (
                        <motion.ul
                            className={clsx(
                                `   z-50
                                    border
                                    px-3
                                    border-neutral-300
                                    bg-base-100
                                    text-base-content
                                    absolute
                                    max-h-64
                                    left-0
                                    top-full
                                    mt-1
                                    overflow-y-scroll
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
