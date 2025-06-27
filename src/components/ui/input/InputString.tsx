'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {get, set} from "lodash";
import {Input} from "@/components/ui/input/Input";

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

    return (
        <Input
            label={label}
            className={className}
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
    );
}