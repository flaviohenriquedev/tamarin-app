import React, {InputHTMLAttributes} from "react";
import {inputStyle} from "@/components/ui/input/style";
import {Label} from "@/components/ui/label/Label";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
}

export function Input({
                          id,
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
                          label
                      }: Props) {

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
                <Label htmlFor={name ? name : ''} title={label} required={required}/>
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
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}