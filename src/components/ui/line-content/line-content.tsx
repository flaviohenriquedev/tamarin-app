import {ReactNode} from "react";
import clsx from "clsx";

type Props = {
    children: ReactNode;
    justifyContent?: 'start' | 'center' | 'end';
    alignItems?: 'start' | 'center' | 'end';
    className?: string;
}

export function LineContent({children, justifyContent, alignItems, className}: Props) {

    const style = clsx(
        'flex w-full gap-2 m-1 mb-4',
        justifyContent === 'center' ? 'justify-center'
            : justifyContent === 'end' ? 'justify-end'
                : 'justify-start',

        alignItems === 'center' ? 'items-center'
            : justifyContent === 'start' ? 'items-start'
                : 'items-end',
    )

    return (
        <div className={`${style} ${className}`}>
            {children}
        </div>
    )
}