'use client'

import {getCountries, getCountryCallingCode} from 'react-phone-number-input'
import React from 'react'

type Labels = Record<string, string>;

type Props = {
    value: string | undefined;
    onChange: (value: string | undefined) => void;
    labels: Labels;
    className: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const CountrySelect = ({ value, onChange, labels, className }: Props) => (
<>
    <select
        className={className}
        value={value}
        onChange={event => onChange(event.target.value || undefined)}
    >
        <option value="">
            {labels['ZZ']}
        </option>
        {getCountries().map((country) => (
            <option key={country} value={country}>
                {labels[country]} +{getCountryCallingCode(country)}
            </option>
        ))}
    </select>
</>
);

export default CountrySelect;
