'use client'

import {usePathname} from "next/navigation";
import {IoIosArrowForward} from "react-icons/io";
import {RouteType} from "@/types/RouteType";
import {formarBreadcrumb} from "@/components/ui/breadcrumb/formar-breadcrumb";

type Props = {
    rotas: RouteType[]
}

export function Breadcrumb({rotas}: Props) {

    const pathname = usePathname();
    const breadcrumbs = formarBreadcrumb(pathname, rotas);

    function renderData() {
        return (
            breadcrumbs && breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.title} className={`flex items-center ${pathname === breadcrumb.href ? 'text-[#B8520A]' : 'text-white/40'}`}>
                    <div className={`flex items-center gap-2 p-2 ${pathname === breadcrumb.href ? 'text-sm' : 'text-xs'}`}>
                        {breadcrumb.icon}
                        {breadcrumb.title}
                    </div>
                    {index+1 < breadcrumbs.length && <span><IoIosArrowForward /></span>}
                </li>
            ))
        )
    }

    return (
        <div>
            <ul className={`flex`}>
                {renderData()}
            </ul>
        </div>
    )
}