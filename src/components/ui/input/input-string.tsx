'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {get, set} from "lodash";

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
        <>
            {label && (<label htmlFor={name} className="block font-bold">{label}</label>)}
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
        </>
    );
}