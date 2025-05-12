'use client'

import {ChangeEvent, useEffect, useState} from "react";
import {get, set} from "lodash";

type Props<E> = {
    entidade: E,
    atributo: string
}

export function Checkbox<E>({ entidade, atributo }: Props<E>) {
    const [valor, setValor] = useState<boolean>(false)

    useEffect(() => {
        if (entidade) set(entidade, atributo, valor)
    }, [atributo, entidade, valor]);

    const atribuirValor = (e: ChangeEvent<HTMLInputElement>) => {
        const novoValor = e.target.checked
        setValor(novoValor)
        if (entidade) set(entidade, atributo, novoValor)
    }

    useEffect(() => {
        get(entidade, atributo)
    }, [atributo, entidade]);

    return (
        <input type="checkbox"
               className="cursor-default checkbox checkbox-xs"
               onChange={atribuirValor}
               checked={valor}
        />
    )
}
