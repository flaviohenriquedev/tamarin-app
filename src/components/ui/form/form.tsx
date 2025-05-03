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
        <form className={className} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}