'use client'

import {inputStyle} from "@/components/ui/input/style";
import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {DayPicker} from "react-day-picker";
import {ptBR as localePtBR} from "react-day-picker/locale";
import {Asterisk, Calendar} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {InputProps} from "@/interfaces/InputProps";
import {get, set} from "lodash";
import {aplicarMascaraData, formatDateBR, parseDateBR} from "@/utils/utils";
import {isValid, parse} from "date-fns";

interface Props<E> extends InputProps<E> {
    dataPadrao?: Date;
    onChangeDate?: (date: Date) => void;
}

export function InputDataCompleta<E>({entidade, atributo, label, name, required, dataPadrao, onChangeDate}: Props<E>) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [date, setDate] = useState<Date | undefined>();
    const [inputValue, setInputValue] = useState<string>("");
    const [open, setOpen] = useState(false);

    const initializedRef = useRef(false);

    useEffect(() => {
        if (initializedRef.current) return;
        const valorEntidade = get(entidade, atributo);
        if (valorEntidade) {
            const valorParse = parse(valorEntidade, 'yyyy-MM-dd', new Date());
            setDate(valorParse);
            setInputValue(formatDateBR(valorParse));
        } else if (!valorEntidade && dataPadrao) {
            setDate(dataPadrao);
            setInputValue(formatDateBR(dataPadrao));
            if (entidade) set(entidade, atributo, dataPadrao);
        }
        initializedRef.current = true;
    }, [atributo, entidade, dataPadrao]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const valorComMascara = aplicarMascaraData(e.target.value);
        setInputValue(valorComMascara);

        // Quando estiver com o formato completo "dd/mm/aaaa"
        if (valorComMascara.length === 10) {
            const parsed = parseDateBR(valorComMascara);
            if (parsed && isValid(parsed)) {
                setDate(parsed);
                if (entidade) set(entidade, atributo, parsed);
            } else {
                setDate(undefined); // evita sujeira se digitar data inválida
            }
        } else {
            setDate(undefined); // reseta caso o usuário apague algo
        }
    };

    useEffect(() => {
        if (onChangeDate && date) onChangeDate(date);
    }, [date, onChangeDate]);

    const handleSelect = (dataSelecionada: Date | undefined) => {
        if (dataSelecionada) {
            setDate(dataSelecionada);
            setInputValue(formatDateBR(dataSelecionada));
            if (entidade) set(entidade, atributo, dataSelecionada);
        }
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`
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
            <div className="relative w-fit" ref={wrapperRef}>
                <div className="relative flex items-center">
                    <input
                        className={`${inputStyle}`}
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="dd/mm/aaaa"
                    />
                    <div className={'bg-blue-300'}>
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="cursor-pointer h-full absolute right-2 top-1/2 -translate-y-1/2 hover:text-primary z-10"
                            tabIndex={-1}
                        >
                            <Calendar size={18}/>
                        </button>
                    </div>

                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            className={'fixed max-w-52 z-10 shadow-[0px_1px_12px_0px_rgba(0,_0,_0,_0.1)]'}
                            initial={{opacity: 0, scale: 0.95, y: -10}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            exit={{opacity: 0, scale: 0.95, y: -10}}
                            transition={{duration: 0.2, ease: "easeOut"}}>
                            <DayPicker
                                locale={localePtBR}
                                mode="single"
                                selected={date}
                                onSelect={handleSelect}
                                defaultMonth={date}
                                className={`react-day-picker rdp-day`}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
