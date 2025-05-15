'use client'

import React from "react"
import {inputStyle} from "@/components/ui/input/style";
import {Input} from "@/components/ui/input/input";
import {InputProps} from "@/interfaces/InputProps";

export function InputString<E extends object>({
                                                  entidade,
                                                  atributo,
                                                  ...props
                                              }: InputProps<E>) {
    return (
        <Input
            entidade={entidade}
            atributo={atributo}
            className={inputStyle}
            id={props.id}
            placeholder={props.placeholder}
            name={props.name}
            maxLength={props.maxLength}
            type={props.type ? props.type : "text"}
            autoComplete={props.autoComplete}
            disabled={props.disabled}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onKeyDown={props.onKeyDown}
            required={props.required}
        />
    );
}