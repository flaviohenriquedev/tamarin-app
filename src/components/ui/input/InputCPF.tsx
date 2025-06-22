'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {limparCNPJ, mascararCPF} from "@/utils/utils";
import {get, set} from "lodash";
import {Asterisk} from "lucide-react";
import clsx from "clsx";

interface InputProps<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo?: string;
    entidade?: E;
    label?: string;
    className?: string;
}

export function InputCPF<E extends object>({
                                               entidade,
                                               atributo,
                                               id,
                                               name,
                                               label,
                                               type,
                                               autoComplete,
                                               disabled,
                                               onChange,
                                               onBlur,
                                               onKeyDown,
                                               required,
                                               className
                                           }: InputProps<E>) {

    const [valorInput, setValorInput] = useState<string>('')

    useEffect(() => {
        if (entidade && atributo) {
            let valor = '';
            if (entidade) {
                valor = mascararCPF(get(entidade, atributo))
            }
            setValorInput(valor)
        }
    }, [atributo, entidade])

    const atribuirValorInput = (valor: string) => {
        setValorInput(mascararCPF(valor))
        if (entidade && atributo) {
            set(entidade, atributo, limparCNPJ(valor))
        }
    }

    const classesContainer = clsx(
        'flex flex-col gap-1',
        !/w-/.test(className ?? '') && 'flex-1'
    )

    const classesInput = clsx(
        inputStyle,
        !/w-/.test(className ?? '') && 'w-full',
        className
    )

    return (
        <div className={`${classesContainer}`}>
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
                id={id}
                placeholder="___.___.___-__"
                name={name}
                minLength={14}
                maxLength={14}
                type={type ? type : "text"}
                autoComplete={autoComplete}
                disabled={disabled}
                value={valorInput}
                onChange={onChange ? onChange : (e) => atribuirValorInput(e.target.value)}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                required={required}
            />
        </div>
    );
}