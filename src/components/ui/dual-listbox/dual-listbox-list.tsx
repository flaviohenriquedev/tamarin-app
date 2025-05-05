import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

export function DualListboxList({children}: Props) {
    return (
        <ul className={`
                    dl-list
                    max-h-52
                    min-h-52
                    overflow-y-scroll
                    scrollbar-thumb-base-300
                    scrollbar-track-transparent
                    scrollbar-thin
                    pb-20
                `}>
            {children}
        </ul>
    )
}