'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {limparCNPJ, mascararCNPJ} from "@/utils/utils";
import {get, set} from "lodash";

interface InputProps<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
}

export function InputCNPJ<E extends object>({
                                                entidade,
                                                atributo,
                                                id,
                                                name,
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
            valor = mascararCNPJ(get(entidade, atributo))
        }
        setValorInput(valor)

    }, [atributo, entidade])

    const atribuirValorInput = (valor: string) => {
        setValorInput(mascararCNPJ(valor))
        set(entidade, atributo, limparCNPJ(valor))
    }

    return (
        <input
            className={inputStyle}
            id={id}
            placeholder="__.___.___/____-__"
            name={name}
            minLength={18}
            maxLength={18}
            type={type ? type : "text"}
            autoComplete={autoComplete}
            disabled={disabled}
            value={valorInput}
            onChange={onChange ? onChange : (e) => atribuirValorInput(e.target.value)}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            required={required}
        />
    );
}