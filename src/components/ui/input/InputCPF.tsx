'use client'

import React, {InputHTMLAttributes, useEffect, useState} from "react"
import {limparCNPJ, mascararCPF} from "@/utils/utils";
import {get, set} from "lodash";
import {Input} from "@/components/ui/input/Input";

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

    return (
        <Input
            className={className}
            label={label}
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