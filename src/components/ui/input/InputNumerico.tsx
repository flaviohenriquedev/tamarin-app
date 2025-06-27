'use client'

import React, {InputHTMLAttributes} from "react";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {useValorAtributo} from "@/components/ui/input/hook/useValorAtributo";
import {inputStyle} from "@/components/ui/input/style";
import {Label} from "@/components/ui/label/Label";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E,
    label?: string,
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
                                                            onChange
                                                        }: Props<E>) {

    const {valorAtributo, atribuirValor} = useValorAtributo(entidade, atributo);

    return (
        <div className={`
            flex-1
            flex
            flex-col
            gap-1`}>
            {label && (
                <Label htmlFor={name ? name : ''} title={label} required={required} />
            )}
            <input
                className={inputStyle}
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
        </div>
    );
}
