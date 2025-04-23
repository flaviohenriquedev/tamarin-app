import {ButtonHTMLAttributes, ReactNode} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function Button({children, type = 'button'}: Props) {
    return (
        <button className={`
                            bg-[#B8520A]
                            text-sm
                            px-4 py-1
                            hover:bg-[#B8520A]/90
                            `}
                type={type}>
            {children}
        </button>
    )
}