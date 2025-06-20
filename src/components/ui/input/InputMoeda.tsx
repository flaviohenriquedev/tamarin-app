import {NumberFormatValues, NumericFormat} from "react-number-format";
import {inputStyle} from "@/components/ui/input/style";
import React, {InputHTMLAttributes, useEffect, useState} from "react";
import {Asterisk} from "lucide-react";
import {get, set} from "lodash";

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
                <label
                    htmlFor={name ? name : ''}
                    className="flex items-center font-semibold text-gray-500 gap-1 text-[9pt] pl-1">
                    {required && <span className={`text-error `}><Asterisk size={12}/></span>}
                    {label}
                </label>
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
