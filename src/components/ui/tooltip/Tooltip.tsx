import {ReactNode} from "react";

type Props = {
    children: ReactNode;
    label: string;
    className?: string;
}

export function Tooltip({children, label, className}: Props) {
    return (
        <div className={`
            tooltip
            tooltip-bottom
            ${className}
        `} data-tip={label}>
            {children}
        </div>
    )
}