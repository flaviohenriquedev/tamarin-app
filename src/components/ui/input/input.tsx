import React from "react";
import {inputStyle} from "@/components/ui/input/style";
import {InputProps} from "@/interfaces/InputProps";
import {useValorAtributo} from "@/components/ui/input/hook/useValorAtributo";

export function Input<E extends object>({...props}: InputProps<E>) {
    const {valorAtributo, atribuirValor} = useValorAtributo(props.entidade, props.atributo)

    return (
        <>
            <input
                className={inputStyle}
                id={props.id}
                placeholder={props.placeholder}
                name={props.name}
                maxLength={props.maxLength}
                type={props.type ? props.type : "text"}
                autoComplete={props.autoComplete}
                disabled={props.disabled}
                value={props.value ? props.value : valorAtributo}
                onChange={props.onChange ? props.onChange : (e) => atribuirValor(e.target.value)}
                onBlur={props.onBlur}
                onKeyDown={props.onKeyDown}
                required={props.required}
            />
        </>
    )
}