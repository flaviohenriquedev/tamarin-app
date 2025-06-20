import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {get, set} from "lodash";
import {Asterisk} from "lucide-react";
import clsx from "clsx";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {AnimatePresence, motion} from "framer-motion";
import {SelectItemValue} from "@/components/ui/select-item/SelectItemValue";

interface Props<E extends EntidadePadrao, T extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
    fieldDescricao: string;
    fieldValor: string;
    label?: string;
    className?: string;
    funcaoBuscar: (valor: string) => Promise<T[]>;
    widthClass?: string;
    onSelectItem: (value: TSelectItem) => void;
}

export function InputSearch<E extends EntidadePadrao, T extends EntidadePadrao>({
                                                          entidade,
                                                          atributo,
                                                          id,
                                                          placeholder,
                                                          name,
                                                          maxLength,
                                                          type,
                                                          autoComplete,
                                                          disabled,
                                                          value,
                                                          onChange,
                                                          onBlur,
                                                          onKeyDown,
                                                          required,
                                                          label,
                                                          className,
                                                          funcaoBuscar,
                                                          fieldDescricao,
                                                          fieldValor,
                                                          widthClass,
                                                          onSelectItem
                                                      }: Props<E, T>) {

    const [valorInput, setValorInput] = useState<string>('')
    const [valorDeBusca, setValorDeBusca] = useState<string>('')
    const [debouncedInputValue, setDebouncedInputValue] = useState("")

    const [listaSelectItems, setListaSelectItems] = useState<TSelectItem[]>([])

    useEffect(() => {
        if (entidade && atributo) {
            const valor = get(entidade, atributo) ?? '';
            setValorInput(valor);
        }
    }, [atributo, entidade]);

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(valorDeBusca);
        }, 500);
        return () => clearTimeout(delayInputTimeoutId);
    }, [valorDeBusca]);

    useEffect(() => {
        if (funcaoBuscar) funcaoBuscar(debouncedInputValue).then(result => {
            if (result && result.length > 0) {
                const itens: TSelectItem[] = [];
                result.map(item => {
                    itens.push({
                        value: get(item, fieldValor),
                        label: get(item, fieldDescricao),
                    })
                })
                setListaSelectItems(itens);
            }
        });
    }, [debouncedInputValue, fieldDescricao, fieldValor, funcaoBuscar]);

    const atribuirValorInput = (valor: string) => {
        setValorDeBusca(valor);
        setValorInput(valor); // atualiza o estado do input
        if (!valor || valor.length <= 0) {
            setListaSelectItems([])
        }
        if (entidade && atributo) {
            set(entidade, atributo, valor); // atualiza a entidade também
        }
    };

    const classesContainer = clsx(
        'flex flex-col gap-1',
        !/w-/.test(className ?? '') && 'flex-1'
    )

    const classesInput = clsx(
        inputStyle,
        !/w-/.test(className ?? '') && 'w-full',
        className
    )

    function renderListaResultados() {
        return listaSelectItems.map((valor) => {
            return <SelectItemValue key={valor.value as string}
                                    setItemSelecionado={handleSelectItem}
                                    valor={valor}/>
        })
    }

    function handleSelectItem(valor: TSelectItem) {
        setValorInput(valor.label);
        setValorDeBusca('');
        if (onSelectItem) onSelectItem(valor)
        setListaSelectItems([]);
    }

    return (
        <div className={`${classesContainer} relative`}>
            {label && (
                <label
                    htmlFor={name ? name : ''}
                    className="flex items-center font-semibold text-gray-500 gap-1 text-[9pt] pl-1">
                    {required && <span className={`text-error `}><Asterisk size={12}/></span>}
                    {label}
                </label>
            )}
            <input
                className={`${classesInput}`}
                required={required}
                id={id}
                placeholder={placeholder ? placeholder : 'Digite para buscar...'}
                name={name}
                maxLength={maxLength}
                type={type ? type : "text"}
                autoComplete={autoComplete}
                disabled={disabled}
                value={value ? value : valorInput}
                onChange={onChange ? onChange : (e) => atribuirValorInput(e.target.value)}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />

            <AnimatePresence>
                {listaSelectItems && listaSelectItems.length > 0 && (
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
                        {renderListaResultados()}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}