'use client'

import {usePathname} from "next/navigation";
import {IoIosArrowForward} from "react-icons/io";
import {TRoute} from "@/types/_root/TRoute";
import {formarBreadcrumb} from "@/components/ui/breadcrumb/formar-breadcrumb";

type Props = {
    rotas: TRoute[]
}

export function Breadcrumb({rotas}: Props) {

    const pathname = usePathname();
    const breadcrumbs = formarBreadcrumb(pathname, rotas);

    function renderData() {
        return (
            breadcrumbs && breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.title} className={`
                    flex
                    items-center
                    ${pathname === breadcrumb.href ? 'text-base-content bg-base-300 rounded-md px-2 py-1' : 'text-base-content/40'}
                    `}>
                    <div className={`flex items-center gap-2 text-[9pt]`}>
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
            <ul className={`flex w-fit rounded-tr-md rounded-br-md`}>
                {renderData()}
            </ul>
        </div>
    )
}