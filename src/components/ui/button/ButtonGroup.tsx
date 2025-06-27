import {ReactNode} from "react";
import {LineContent} from "@/components/ui/line-content/line-content";

type Props = {
    children: ReactNode,
    className?: string,
}

export function ButtonGroup({children, className}: Props) {
    return (
        <div className={`${className} py-3 sm:flex sm:flex-row-reverse items-center`}>
            <LineContent justifyContent={`end`}>
                {children}
            </LineContent>
        </div>
    )
}