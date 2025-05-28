'use client'

import React, {useState} from 'react'
import {CountryCode} from 'libphonenumber-js'

export default function Example(label: string, name: string, required: boolean) {
    const [country, setCountry] = useState<CountryCode | undefined>('BR')
    const [value, setValue] = useState<string | undefined>('')

    return (
        // <div className={`
        //     flex-1
        //     flex
        //     flex-col
        //     gap-1`}>
        //     {label && (
        //         <label
        //             htmlFor={name}
        //             className="flex items-center font-semibold text-gray-500 gap-1 text-[9pt] pl-1">
        //             {required && <span className={`text-error `}><Asterisk size={12}/></span>}
        //             {label}
        //         </label>
        //     )}
        //     <div className="flex gap-2">
        //         <SelectPaises
        //             className={`bg-base-200`}
        //             labels={ptBR}
        //             value={country}
        //             onChange={(c) => setCountry(c as CountryCode)} // força tipo certo
        //         />
        //         <PhoneInput
        //             maxLength={15}
        //             country={country}
        //             value={value}
        //             onChange={setValue}
        //             placeholder="Enter phone number"
        //             className={inputStyle}
        //         />
        //     </div>
        // </div>
        <div>dev</div>
    )
}
