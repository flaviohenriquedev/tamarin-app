import React, {ChangeEvent, InputHTMLAttributes, useEffect, useState} from "react";
import {inputStyle} from "@/components/ui/input/style";
import {Label} from "@/components/ui/label/Label";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function Input({   id,
                          placeholder,
                          name,
                          maxLength,
                          type,
                          autoComplete,
                          disabled,
                          value,
                          onChange,
                          onBlur,
                          onKeyDown,
                          required,
                          label}: Props) {

    const [valInput, setValInput] = useState<string | number | readonly string[] | undefined>(value);

    useEffect(() => {
        setValInput(value);
    }, [value]);

    function onChangeValInput(e: ChangeEvent<HTMLInputElement>) {
        setValInput(e.target.value);
        if (onChange) onChange(e)
    }

    return (
        <div className={`
            flex-1
            flex
            flex-col
            gap-1`}>
            {label && (
                <Label htmlFor={name ? name : ''} title={label} required={required} />
            )}
            <input
                className={inputStyle}
                id={id}
                placeholder={placeholder}
                name={name}
                maxLength={maxLength}
                type={type ? type : "text"}
                autoComplete={autoComplete}
                disabled={disabled}
                value={valInput}
                onChange={(e) => onChangeValInput(e)}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                required={required}
            />
        </div>
    )
}