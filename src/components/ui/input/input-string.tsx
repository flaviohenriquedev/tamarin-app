'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {get, set} from "lodash";
import {Asterisk} from "lucide-react";

interface Props<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
    label?: string;
}

export function InputString<E extends object>({
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
                                                  label
                                              }: Props<E>) {

    const [valorInput, setValorInput] = useState<string>('')
    useEffect(() => {
        let valor = '';
        if (entidade) {
            valor = get(entidade, atributo)
        }
        setValorInput(valor)
    }, [atributo, entidade])

    const atribuirValorInput = (valor: string) => {
        setValorInput(valor)
        set(entidade, atributo, valor)
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
                required={required}
                id={id}
                placeholder={placeholder}
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
        </div>
    );
}