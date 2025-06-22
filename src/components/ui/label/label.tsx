import React, {HTMLAttributes} from "react";
import {FaAsterisk} from "react-icons/fa";


interface Props extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    title?: string
    required?: boolean
}

export function Label({children, title, required}: Props) {
    return (
        <div className={`
            flex-1
            flex
            flex-col
            gap-1
        `}>
            {title && (
                <label className={`
                flex
                gap-1
                items-center
            `}>

                    {required && <FaAsterisk size={8} color="red"/>}
                    <span className={`
                    text-[9pt]
                    label-text
                    pl-1
                `}>{title}</span>
                </label>
            )}
            <div className={'flex items-center gap-2'}>
                {children}
            </div>
        </div>
    );
}