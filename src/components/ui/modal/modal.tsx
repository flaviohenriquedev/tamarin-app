'use client'

import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    title?: string,
}

export default function Modal({children, isOpen, setIsOpen, title}: Props) {
    return (
        <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className={`
                    fixed
                    inset-0
                    bg-base-300/70
                    transition-opacity
                    data-closed:opacity-0
                    data-enter:duration-300
                    data-enter:ease-out
                    data-leave:duration-200
                    data-leave:ease-in
                `}
            />

            <div className={`
                fixed
                inset-0
                z-10
                w-screen
                overflow-y-auto
            `}>
                <div className={`
                    flex
                    min-h-full
                    items-end
                    justify-center
                    p-4
                    text-center
                    sm:items-center
                    sm:p-0
                `}>
                    <DialogPanel
                        transition
                        className={`
                            relative
                            transform
                            overflow-hidden
                            rounded-lg
                            bg-base-100
                            text-left
                            shadow-xl
                            transition-all
                            data-closed:translate-y-4
                            data-closed:opacity-0
                            data-enter:duration-300
                            data-enter:ease-out
                            data-leave:duration-200
                            data-leave:ease-in
                            sm:my-8
                            sm:w-full
                            sm:max-w-lg
                            data-closed:sm:translate-y-0
                            data-closed:sm:scale-95
                        `}
                    >
                        {title && (<div><span>{title}</span></div>)}
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
