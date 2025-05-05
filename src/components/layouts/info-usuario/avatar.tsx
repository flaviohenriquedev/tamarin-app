'use client'

import {signOut} from "next-auth/react";

export function Avatar() {

    async function logout() {
        await signOut({redirect: false})
    }

    return (
        <div className="dropdown dropdown-end">
            <div className="avatar" tabIndex={0} role="button" >
                <div className="w-10 ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    )
}