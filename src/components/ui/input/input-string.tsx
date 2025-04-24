'use client'

import React, {InputHTMLAttributes} from "react"
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {useValorAtributo} from "@/components/ui/input/hook/useValorAtributo";
import {inputStyle} from "@/components/ui/input/style";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E
}

export function InputString<E extends EntidadePadrao>({
                                id,
                                type,
                                placeholder,
                                name,
                                maxLength,
                                disabled,
                                entidade,
                                atributo,
                                onBlur,
                                autoComplete,
                                onKeyDown,
                                required = false,
                                value,
                                onChange
                            }: Props<E>){

    const {valorAtributo, atribuirValor} = useValorAtributo(entidade, atributo);

    return (
        <input
            className={inputStyle}
            id={id}
            placeholder={placeholder}
            name={name}
            maxLength={maxLength}
            type={type ? type : "text"}
            autoComplete={autoComplete}
            disabled={disabled}
            value={value ? value : valorAtributo}
            onChange={onChange ? onChange : (e) => atribuirValor(e.target.value)}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            required={required}
        />
    );
};
