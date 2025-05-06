import {ReactNode} from "react";

type Props = {
    children: ReactNode
    label: string
    className?: string
}

export function Fieldset({children, className, label}: Props) {
    return (
        <fieldset className={`${className} fieldset bg-base-200 border-base-300 rounded-md w-xs border p-3`}>
            <legend className="fieldset-legend">{label}</legend>
            {children}
        </fieldset>
    )
}