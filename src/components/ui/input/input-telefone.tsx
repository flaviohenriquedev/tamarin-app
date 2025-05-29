'use client'

import PhoneInput from 'react-phone-number-input/input'
import ptBR from 'react-phone-number-input/locale/pt-BR'
import React, {InputHTMLAttributes, useEffect, useState} from 'react'
import {CountryCode} from 'libphonenumber-js'
import {inputStyle} from "@/components/ui/input/style";
import {SelectPaises} from "@/app/(desenvolvimento)/dev/select-paises";
import {Asterisk} from "lucide-react";
import {get, set} from "lodash";

interface Props<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
    label?: string;
}

export function InputTelefone<E extends object>({atributo, entidade, label, required, name}: Props<E>) {
    const [country, setCountry] = useState<CountryCode | undefined>('BR')
    const [valorInput, setValorInput] = useState<string>('')

    useEffect(() => {
        const valor = get(entidade, atributo) ?? '';
        setValorInput(valor);
    }, [atributo, entidade]);

    const atribuirValorInput = (valor: string | undefined) => {
        if (valor) setValorInput(valor)
        set(entidade, atributo, valor)
    }

    return (
        <div className={`
            flex-1
            flex
            flex-col
            gap-1`}>
            {label && (
                <label
                    htmlFor={name}
                    className="flex items-center font-semibold text-gray-500 gap-1 text-[9pt] pl-1">
                    {required && <span className={`text-error `}><Asterisk size={12}/></span>}
                    {label}
                </label>
            )}
            <div className="flex gap-2">
                <SelectPaises
                    className={`bg-base-200`}
                    labels={ptBR}
                    value={country}
                    onChange={(c) => setCountry(c as CountryCode)} // força tipo certo
                />
                <PhoneInput
                    name={name}
                    maxLength={15}
                    country={country}
                    value={valorInput}
                    onChange={atribuirValorInput}
                    placeholder="Enter phone number"
                    className={inputStyle}
                />
            </div>
        </div>
    )
}
