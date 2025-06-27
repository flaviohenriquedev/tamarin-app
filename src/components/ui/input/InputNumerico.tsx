'use client'

import React, {InputHTMLAttributes} from "react";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {useValorAtributo} from "@/components/ui/input/hook/useValorAtributo";
import {Input} from "@/components/ui/input/Input";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E,
    label?: string,
    className?: string,
}

export function InputNumerico<E extends EntidadePadrao>({
                                                            id,
                                                            placeholder,
                                                            name,
                                                            label,
                                                            disabled,
                                                            entidade,
                                                            atributo,
                                                            onBlur,
                                                            onKeyDown,
                                                            required = false,
                                                            value,
                                                            onChange,
                                                            className
                                                        }: Props<E>) {

    const {valorAtributo, atribuirValor} = useValorAtributo(entidade, atributo);

    return (
        <Input
            label={label}
            className={className}
            id={id}
            placeholder={placeholder}
            type={`number`}
            name={name}
            disabled={disabled}
            value={value ? value : valorAtributo}
            onChange={onChange ? onChange : (e) => atribuirValor(parseInt(e.target.value))}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            required={required}
        />
    );
}
