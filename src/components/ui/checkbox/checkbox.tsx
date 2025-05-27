'use client'

import {ChangeEvent, useEffect, useState} from "react";
import {get, set} from "lodash";

type Props<E> = {
    entidade: E;
    atributo: string;
    isChecked?: boolean;
    label?: string;
    onCheck?: (e: E, valor: boolean) => void;
    classWhenChecked?:
        'checkbox-primary' |
        'checkbox-secondary' |
        'checkbox-success' |
        'checkbox-warning' |
        'checkbox-error' |
        'checkbox-info' |
        'checkbox-accent' |
        'checkbox-neutral '
}

export function Checkbox<E>({entidade, atributo, isChecked, label, classWhenChecked, onCheck}: Props<E>) {
    const [valor, setValor] = useState<boolean>(false)

    useEffect(() => {

        if (!isChecked) {
            const valorEntidade: boolean = get(entidade, atributo) ?? false;
            setValor(valorEntidade);
        }

        if (isChecked !== undefined) {
            setValor(isChecked)
        }

    }, [atributo, entidade]);

    const atribuirValor = (e: ChangeEvent<HTMLInputElement>) => {
        const novoValor = e.target.checked
        setValor(novoValor)
        if (onCheck) onCheck(entidade, novoValor)
        if (entidade) set(entidade, atributo, novoValor)
    }

    return (
        <label className={`label flex items-center text-sm`}>
            <input type="checkbox"
                   className={`
                    cursor-pointer
                    checkbox
                    checkbox-xs
                    ${isChecked && classWhenChecked ? classWhenChecked : ''}
               `}
                   onChange={atribuirValor}
                   checked={valor}
            />
            {label && label}
        </label>
    )
}
