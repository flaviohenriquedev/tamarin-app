import {ReactNode} from "react";

export type TRoute = {
    title: string
    icon?: ReactNode
    href?: string
    subRoute?: TRoute[]
}
