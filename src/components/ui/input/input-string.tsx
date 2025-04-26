'use client'

import React, {InputHTMLAttributes} from "react"
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {useValorAtributo} from "@/components/ui/input/hook/useValorAtributo";

interface Props<E extends EntidadePadrao> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string
    entidade: E
}

export function InputString<E extends EntidadePadrao>({
                                                          id,
                                                          type,
                                                          placeholder,
                                                          name,
                                                          maxLength,
                                                          disabled,
                                                          entidade,
                                                          atributo,
                                                          onBlur,
                                                          autoComplete,
                                                          onKeyDown,
                                                          required = false,
                                                          value,
                                                          onChange
                                                      }: Props<E>) {

    const {valorAtributo, atribuirValor} = useValorAtributo(entidade, atributo);

    return (
        <div className="max-w-sm space-y-3">
            <input type="text" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="This is placeholder" />
        </div>
    );
}