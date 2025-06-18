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
        <fieldset className={`${className} fieldset border border-base-300 rounded-lg ${altura ? altura : 'h-fit'} ${largura ? largura : 'w-xs'} p-3`}>
            <legend className="fieldset-legend text-info font-normal">
                <div className={`flex items-center justify-center border border-base-300 bg-base-200 text-info rounded-lg px-2 py-1`}>
                    {label}
                </div>
            </legend>
            {children}
        </fieldset>
    )
}