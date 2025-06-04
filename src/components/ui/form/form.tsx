import {FormEvent, ReactNode} from "react";

type Props = {
    children: ReactNode
    onSubmit: () => void;
    className?: string;
}

export function Form({children, onSubmit, className}: Props) {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit()
    }

    return (
        <form className={`${className} text-base-content px-4 pb-4`}
              onSubmit={handleSubmit}>
            {children}
        </form>
    )
}