import {ReactNode} from "react";

type Props = {
    children: ReactNode;
    label: string;
}

export function Tooltip({children, label}: Props) {
    return (
        <div className={`
            tooltip
            tooltip-bottom
        `} data-tip={label}>
            {children}
        </div>
    )
}