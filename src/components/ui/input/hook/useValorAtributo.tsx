'use client'

import {useEffect, useState} from "react";
import {get, set} from "lodash";
import {EntidadePadrao} from "@/sistema/_root/entidades/EntidadePadrao";

export function useValorAtributo<E extends EntidadePadrao>(
    entidade: E,
    atributo: string) {
    const [valorAtributo, setValorAtributo] = useState<string | number | readonly string[] | undefined>('');

    useEffect(() => {
        if (atributo) {
            const valor = get(entidade, atributo);
            setValorAtributo(
                valor === 0
                || valor === ''
                || valor === undefined
                || valor === null
                    ? ''
                    : valor);
        }
    }, [atributo, entidade]);

    function atribuirValor(valor: string | number) {
        setValorAtributo(valor.toString());
        atribuirValorEntidade(entidade, atributo, valor)
    }

    function atribuirValorEntidade(entidade: E, atributo: string, valor: string | number) {
        const valorTratado = valor === 0 || valor === '' || valor === undefined ? null : valor
        if (atributo) set(entidade, atributo, valorTratado);
    }

    return {valorAtributo, atribuirValor};
}
