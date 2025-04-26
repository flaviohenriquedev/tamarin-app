import {InputHTMLAttributes} from "react";

type Props = InputHTMLAttributes<HTMLInputElement>

export function Input({
                          placeholder,
                          type = 'text',
                      }: Props) {
    return (
        <input className={`
            border-none
            outline-hidden
            bg-[#363636]
            py-1 px-3
            rounded-xs
            text-sm
            
            focus:outline-1 
            focus:outline-primary
        `}
               placeholder={placeholder}
               type={type}/>
    )
}