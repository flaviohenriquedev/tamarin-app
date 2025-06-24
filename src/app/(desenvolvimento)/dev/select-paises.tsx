'use client'

import {getCountries, getCountryCallingCode} from 'react-phone-number-input'
import React, {useEffect, useState} from 'react'
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import {CountryCode} from "libphonenumber-js";
import {EntidadePadrao} from "@/class/EntidadePadrao";

type Labels = Record<string, string>;

type Props = {
    value: string | undefined;
    onChange: (value: string | undefined) => void;
    labels: Labels;
    className: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectPaises({onChange, labels, tabIndex}: Props) {

    const [selectItemPaises, setSelectItemPaises] = useState<TSelectItem[]>([]);
    const [valorPadrao] = useState<TSelectItem>({
        label: `${labels['BR']} +${getCountryCallingCode('BR')}`,
        labelWhenSelected: `+${getCountryCallingCode('BR')}`,
        value: 'BR'
    });

    useEffect(() => {
        const listaPaises: TSelectItem[] = [];
        getCountries().map(c => {
            const selectItem: TSelectItem = {
                label: `${labels[c]} +${getCountryCallingCode(c)}`,
                labelWhenSelected: `+${getCountryCallingCode(c)}`,
                value: c
            }
            listaPaises.push(selectItem);
        })

        setSelectItemPaises(listaPaises.sort((a, b) => a.label.localeCompare(b.label)));

    }, [labels])

    function onSelectItem(item: TSelectItem | null) {
        if (item) {
            onChange(item.value as CountryCode)
        }
    }

    return (
        <SelectItem
            tabIndex={tabIndex}
            values={selectItemPaises}
            onSelect={onSelectItem}
            valorPadrao={valorPadrao}
            widthClass={`w-fit`}
            entidade={new EntidadePadrao()}
            fieldValor={''}/>
    )
}