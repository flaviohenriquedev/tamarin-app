import {NumberFormatValues, NumericFormat} from "react-number-format";
import {inputStyle} from "@/components/ui/input/style";
import React, {InputHTMLAttributes, useEffect, useState} from "react";
import {get, set} from "lodash";
import {Label} from "@/components/ui/label/label";

interface Props<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
    label?: string;
}

export function InputMoeda<E>({
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

    const [valor, setValor] = useState<string | undefined>();

    useEffect(() => {
        const valorEntidade = get(entidade, atributo);
        if (valorEntidade) {
            setValor(valorEntidade);
        }
    }, [atributo, entidade]);

    function handleChanges(values: NumberFormatValues) {
        setValor(values.value)
        if (entidade) set(entidade, atributo, values.value)
    }

    return (
        <div className={`
            flex-1
            flex
            flex-col
            gap-1`}>
            {label && (
                <Label htmlFor={name ? name : ''} title={label} required={required} />
            )}
            <NumericFormat
                id={id}
                className={inputStyle}
                placeholder={placeholder}
                disabled={disabled}
                value={valor}
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale
                prefix="R$ "
                allowNegative={false}
                onValueChange={(values) => handleChanges(values)}
            />
        </div>
    );
}
