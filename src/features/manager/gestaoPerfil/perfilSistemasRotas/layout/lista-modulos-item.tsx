import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

export function ListaModulosItems({children}: Props) {
    return (
        <li>
            {children}
        </li>
    )
}