import {ReactNode} from "react";

export type RouteType = {
    title: string
    icon?: ReactNode
    href?: string
    breadcrumbRef: string
    subRoute?: RouteType[]
}
