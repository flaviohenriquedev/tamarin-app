import {InputHTMLAttributes} from "react";

export interface InputProps<E> extends InputHTMLAttributes<HTMLInputElement> {
    atributo: string;
    entidade: E;
    label?: string;
}