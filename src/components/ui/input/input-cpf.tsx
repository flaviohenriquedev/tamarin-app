'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {limparCNPJ, mascararCPF} from "@/utils/utils";
import {get, set} from "lodash";

interface InputProps<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
}

export function InputCPF<E extends object>({
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
            valor = mascararCPF(get(entidade, atributo))
        }
        setValorInput(valor)

    }, [atributo, entidade])

    const atribuirValorInput = (valor: string) => {
        setValorInput(mascararCPF(valor))
        set(entidade, atributo, limparCNPJ(valor))
    }

    return (
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
    );
}