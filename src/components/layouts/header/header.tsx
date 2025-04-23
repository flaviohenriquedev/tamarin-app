import {SelectItem} from "@/components/ui/select-item/select-item";
import {InfoUsuario} from "@/components/layouts/info-usuario/info-usuario";

export function Header() {
    return (
        <header className={`flex items-center justify-end gap-10 px-10 w-full max-h-20 min-h-20`}>
            <SelectItem />
            <InfoUsuario />
        </header>
    )
}