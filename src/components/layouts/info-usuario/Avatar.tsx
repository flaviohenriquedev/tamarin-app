'use client'

import Image from "next/image";
import {icones} from "@/components/common/icones";
import {logout} from "@/features/sistema/functions";

export function Avatar() {
    return (
        <div className="dropdown dropdown-end">
            <div className="avatar" tabIndex={0} role="button" >
                <div className="w-10 ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                    <Image width={20}
                           height={20}
                           alt={`avatar`} src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>
            <ul tabIndex={0} className="flex flex-col text-xs gap-2 dropdown-content cursor-default p-3 menu bg-base-100 rounded-box z-1 w-52 shadow-sm">
                <li onClick={logout}><span className={`cursor-default flex items-center`}>{icones.config} Configurações</span></li>
                <hr className={`border-base-content/30`}/>
                <li onClick={logout}><span className={`cursor-default flex items-center`}>{icones.logout} Logout</span></li>
            </ul>
        </div>
    )
}