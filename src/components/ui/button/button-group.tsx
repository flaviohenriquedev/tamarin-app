import {ReactNode} from "react";
import {LineContent} from "@/components/ui/line-content/line-content";

type Props = {
    children: ReactNode
}

export function ButtonGroup({children}: Props) {
    return (
        <div className="py-3 sm:flex sm:flex-row-reverse">
            <LineContent justifyContent={`end`}>
                {children}
            </LineContent>
        </div>
    )
}