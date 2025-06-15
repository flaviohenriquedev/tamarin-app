'use client'

import {NumericFormat} from 'react-number-format';
import {useState} from 'react';
import {inputStyle} from "@/components/ui/input/style";

export default function InputMoeda() {
    const [valor, setValor] = useState<string | undefined>();

    return (
        <NumericFormat
            value={valor}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale
            prefix="R$ "
            allowNegative={false}
            onValueChange={(values) => {
                setValor(values.value); // valor numérico puro: '1234.56'
            }}
            className={inputStyle}
        />
    );
}
