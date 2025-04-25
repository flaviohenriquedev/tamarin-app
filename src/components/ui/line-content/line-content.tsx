import {ReactNode} from "react";

type Props = {
    children: ReactNode
    className?: string
}

export function LineContent({children, className}: Props) {
    return (
        <div className={`flex items-center w-full my-2 gap-2 ${className}`}>
            {children}
        </div>
    )
}