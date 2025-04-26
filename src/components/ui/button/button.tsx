import {ButtonHTMLAttributes, ReactNode} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function Button({children, type = 'button', onClick}: Props) {
    return (
        <button className={`
                            bg-primary
                            text-sm
                            text-primary-content
                            rounded-md
                            p-2
                            `}
                type={type}
                onClick={onClick}>
            {children}
        </button>
    )
}