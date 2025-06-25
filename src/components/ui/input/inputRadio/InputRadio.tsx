'use client'

import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {ChangeEvent, useEffect, useState} from "react";
import {get, set} from "lodash";

type Props<E> = {
    entidade?: E;
    atributo?: string;
    valores?: TSelectItem[];
    onChange?: (valor: string) => void;
}

export function InputRadio<E>({entidade, atributo, valores, onChange}: Props<E>) {
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        if (entidade && atributo) {
            const valorEntidade = get(entidade, atributo);
            if (valorEntidade) setValue(valorEntidade);
        }
    }, [entidade, atributo]);

    function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
        if (entidade && atributo) set(entidade, atributo, event.target.value)
        if (onChange) onChange(event.target.value);
    }

    return (
        <div className="flex items-center gap-2">
            {valores && valores.map((item) => (
                <div key={item.value as string} className={`
                    flex
                    items-center
                    gap-2
                    border
                    border-base-300
                    rounded-lg
                    px-3 py-2
                    shadow-md
                `}>
                    <input
                        type="radio"
                        name="radio-1"
                        value={item.value as string}
                        checked={value === item.value?.toString()}
                        onChange={onChangeValue}
                        className="radio radio-sm radio-primary"
                    />
                    <label className="text-sm font-medium text-gray-700">
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    )
}
