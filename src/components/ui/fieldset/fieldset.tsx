import {ReactNode} from "react";

type Props = {
    children: ReactNode
    label: string
    className?: string
    largura?: string
    altura?: string
}

export function Fieldset({children, className, label, largura, altura}: Props) {
    return (
        <fieldset className={`${className} fieldset border-base-200 rounded-sm ${altura ? altura : 'h-fit'} ${largura ? largura : 'w-xs'} border p-3 shadow-[-6px_5px_2px_-3px_rgba(0,_0,_0,_0.1)]`}>
            <legend className="fieldset-legend text-warning">{label}</legend>
            {children}
        </fieldset>
    )
}