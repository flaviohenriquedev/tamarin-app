'use client'

import {ChangeEvent, useEffect, useState} from "react";
import {get, set} from "lodash";

type Props<E> = {
    entidade: E;
    atributo: string;
    isChecked?: boolean;
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

export function Checkbox<E>({entidade, atributo, isChecked = false, classWhenChecked}: Props<E>) {
    const [valor, setValor] = useState<boolean>(false)

    useEffect(() => {
        const valorEntidade: boolean = get(entidade, atributo);
        setValor(valorEntidade);
    }, [atributo, entidade]);

    useEffect(() => {
        if (entidade) set(entidade, atributo, valor)
    }, [atributo, entidade, valor]);

    useEffect(() => {
        setValor(isChecked)
    }, [isChecked]);

    const atribuirValor = (e: ChangeEvent<HTMLInputElement>) => {
        const novoValor = e.target.checked
        setValor(novoValor)
        if (entidade) set(entidade, atributo, novoValor)
    }

    return (
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
    )
}
