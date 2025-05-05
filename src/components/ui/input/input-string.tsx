'use client'

import React, {InputHTMLAttributes} from "react"
import {useValorAtributo} from "@/components/ui/input/hook/useValorAtributo";
import {inputStyle} from "@/components/ui/input/style";

interface Props<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E
}

export function InputString<E extends object>({
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
                                                      }: Props<E>) {

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
}