'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {limparCNPJ, mascararCPF} from "@/utils/utils";
import {get, set} from "lodash";
import {Asterisk} from "lucide-react";

interface InputProps<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
    label?: string;
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
                                               required
                                           }: InputProps<E>) {

    const [valorInput, setValorInput] = useState<string>('')

    useEffect(() => {
        let valor = '';
        if (entidade) {
            valor = mascararCPF(get(entidade, atributo))
        }
        setValorInput(valor)

    }, [atributo, entidade])

    const atribuirValorInput = (valor: string) => {
        setValorInput(mascararCPF(valor))
        set(entidade, atributo, limparCNPJ(valor))
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
            <input
                className={inputStyle}
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