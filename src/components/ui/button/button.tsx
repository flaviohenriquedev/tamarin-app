import {ButtonHTMLAttributes, ReactNode} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function Button({children, type = 'button', onClick}: Props) {
    return (
        <button className={`
                            bg-[#B8520A]
                            text-sm
                            rounded-md
                            p-2
                            hover:bg-[#B8520A]/90
                            `}
                type={type}
                onClick={onClick}>
            {children}
        </button>
    )
}