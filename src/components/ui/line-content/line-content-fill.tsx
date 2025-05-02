import {ReactNode} from "react";
import clsx from "clsx";

type Props = {
    children: ReactNode;
    justifyContent?: 'start' | 'center' | 'end';
    alignItems?: 'start' | 'center' | 'end';
    className?: string;
}

export function LineContentFill({children, justifyContent, alignItems, className}: Props) {

    const style = clsx(
        'flex flex-fill gap-2 mb-2',
        justifyContent === 'center' ? 'justify-center'
            : justifyContent === 'end' ? 'justify-end'
                : 'justify-start',

        alignItems === 'center' ? 'items-center'
            : justifyContent === 'end' ? 'items-end'
                : 'items-start',
    )

    return (
        <div className={`${style} ${className}`}>
            {children}
        </div>
    )
}