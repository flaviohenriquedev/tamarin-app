'use client'

import {useState} from "react";
import {signOut} from "next-auth/react";
import {RxExit} from "react-icons/rx";

export function Avatar() {

    const [showMenu, setShowMenu] = useState(false);

    async function logout() {
        await signOut({redirect: false})
    }

    return (
        <div className={'relative'}>
            <div className={`
                    flex
                    items-center
                    justify-center
                    text-base-content
                    text-xl
                    font-bold
                    w-12
                    h-12
                    rounded-full
                    cursor-default
                    border-2 border-primary`}
            onClick={() => setShowMenu(!showMenu)}>
                FH
            </div>
            <div className={`absolute ${showMenu ? 'block' : 'hidden'}`}>
                <div onClick={logout}
                     className={`flex gap-2 items-center p-2 rounded-lg cursor-default hover:bg-base-200`}>
                    <div>
                        <RxExit/>
                    </div>
                    <span>Sair</span>
                </div>
            </div>
        </div>
    )
}