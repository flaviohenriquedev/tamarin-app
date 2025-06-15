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
        <fieldset className={`${className} fieldset border-base-200 rounded-lg ${altura ? altura : 'h-fit'} ${largura ? largura : 'w-xs'} border p-3 shadow-sm`}>
            <legend className="fieldset-legend text-warning">{label}</legend>
            {children}
        </fieldset>
    )
}