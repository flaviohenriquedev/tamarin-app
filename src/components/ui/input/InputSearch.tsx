import {InputHTMLAttributes} from "react";
import {Search} from "lucide-react";

type Props = InputHTMLAttributes<HTMLInputElement>

export function InputSearch({ onChange, placeholder }:Props) {
    return (
        <label
            htmlFor={`search-input`}
            className={`
                    flex
                    items-center
                    gap-3
                    border
                    border-base-content/30
                    outline-hidden
                    text-base-content/50
                    focus-within:border-primary
                    rounded-sm
                    h-10
                    px-3
                `}
            >
            <Search size={12}/>
            <input id={`search-input`} className={`border-none h-full outline-hidden text-[10pt]`} placeholder={placeholder} onChange={onChange}/>
        </label>
    )
}