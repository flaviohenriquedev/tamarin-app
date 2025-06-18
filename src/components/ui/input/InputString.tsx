'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {get, set} from "lodash";
import {Asterisk} from "lucide-react";
import clsx from "clsx";

interface Props<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo?: string;
    entidade?: E;
    label?: string;
    className?: string;
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
                                                  label,
                                                  className
                                              }: Props<E>) {

    const [valorInput, setValorInput] = useState<string>('')

    useEffect(() => {
        if (entidade && atributo) {
            const valor = get(entidade, atributo) ?? '';
            setValorInput(valor);
        }
    }, [atributo, entidade]);

    const atribuirValorInput = (valor: string) => {
        if (entidade && atributo) {
            setValorInput(valor)
            set(entidade, atributo, valor)
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