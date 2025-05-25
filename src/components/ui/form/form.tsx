import {FormEvent, ReactNode} from "react";
import {EntidadePadrao} from "@/class/EntidadePadrao";

type Props<E extends EntidadePadrao> = {
    children: ReactNode
    onSubmit: (entidade: E) => void;
    className?: string;
}

export function Form<E extends EntidadePadrao>({children, onSubmit, className}: Props<E>, entidade: E) {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit(entidade)
    }

    return (
        <form className={`${className} bg-base-100 text-base-content px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}
              onSubmit={handleSubmit}>
            {children}
        </form>
    )
}