import {ReactNode} from "react";

export type RouteType = {
    id: string;
    title: string
    icon?: ReactNode
    href?: string
    subRoute?: RouteType[]
}
