import {IconType} from "react-icons";

export type RouteType = {
    title: string
    icon?: IconType
    href?: string
    breadcrumbRef: string
    subRoute?: RouteType[]
}
