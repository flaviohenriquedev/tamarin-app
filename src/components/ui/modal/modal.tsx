import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {ReactNode} from "react";
import {X} from "lucide-react";

type Props = {
    children: ReactNode;
    onCloseModal?: () => void;
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    title?: string,
}

export default function Modal({children, onCloseModal, isOpen, setIsOpen, title}: Props) {

    function handleCloseModal() {
        setIsOpen(false);
        if (onCloseModal) onCloseModal();
    }

    return (
        <Dialog open={isOpen} onClose={handleCloseModal} className="relative z-10">
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
                            sm:m-3
                            sm:my-8
                            data-closed:sm:translate-y-0
                            data-closed:sm:scale-95
                        `}
                    >
                        <div className={`flex items-center justify-between px-6 py-4 w-full`}>
                            {title && (<div><span className={`text-lg`}>{title}</span></div>)} <X onClick={handleCloseModal} className={`hover:text-primary`}/>
                        </div>
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
