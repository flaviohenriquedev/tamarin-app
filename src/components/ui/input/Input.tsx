import React, {InputHTMLAttributes, useEffect} from "react";
import {inputStyle} from "@/components/ui/input/style";
import {Label} from "@/components/ui/label/Label";
import clsx from "clsx";
import {useFormContext} from "@/components/ui/form/context/useFormContext";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
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
                          className,
                          label}: Props) {

    const {somenteLeitura, setSomenteLeitura} = useFormContext();

    useEffect(() => {
        if (disabled !== null && disabled !== undefined) {
            setSomenteLeitura(disabled);
        }
    }, [disabled, setSomenteLeitura]);

    const classesContainer = clsx(
        'flex flex-col gap-1',
        !/w-/.test(className ?? '') && 'flex-1'
    )

    const classesInput = clsx(
        inputStyle,
        !/w-/.test(className ?? '') && 'w-full',
        className
    )

    return (
        <div className={`${classesContainer}`}>
            {label && (
                <Label htmlFor={name ? name : ''} title={label} required={required} />
            )}
            <input
                className={`${classesInput}`}
                required={required}
                id={id}
                placeholder={placeholder}
                name={name}
                maxLength={maxLength}
                type={type ? type : "text"}
                autoComplete={autoComplete}
                disabled={somenteLeitura}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}