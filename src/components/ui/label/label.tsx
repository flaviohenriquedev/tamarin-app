import React, {ReactNode} from "react";
import {FaAsterisk} from "react-icons/fa";

type Props = {
    children?: ReactNode;
    title?: string;
    required?: boolean;
    htmlFor?: string;
    fullWidth?: boolean;
}

export function Label({children, title, required, htmlFor, fullWidth}: Props) {
    return (
        <div className={`${fullWidth ? 'flex-1' : 'w-auto'} flex flex-col gap-2`}>
            {title && (
                <label htmlFor={htmlFor} className={`flex gap-1 items-center `}>
                    <span className={`text-[9pt] label-text font-semibold text-neutral-500 pl-1`}>{title}</span>
                    {required && <FaAsterisk size={8} color="red"/>}
                </label>
            )}
            {children && (
                <div className={'flex items-center gap-2 mt-auto'}>
                    {children}
                </div>
            )}
        </div>
    );
}