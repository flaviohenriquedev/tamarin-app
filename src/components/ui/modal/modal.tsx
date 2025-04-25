import {ReactNode} from "react";
import {Button} from "@/components/ui/button/button";
import {closeModal} from "@/utils/utils";

type Props = {
    idModal: string
    children: ReactNode
}

export function Modal({idModal, children}: Props) {
    return (
        <dialog id={idModal} className={`
            open:flex
            items-center
            justify-center
            w-screen
            h-screen
            m-auto
            rounded-md
            outline-hidden
            transition-all
            duration-200
            backdrop-blur-md
            bg-transparent
            p-10
        `}>
            <div className={`bg-orange-500 flex flex-col rounded-md items-center justify-center w-fit h-fit p-5`}>
                <div className={`flex items-center justify-between w-full`}>
                    <label className={`font-bold text-xl`}>Cadastro</label>
                    <Button onClick={() => closeModal(idModal)}>X</Button>
                </div>

                {children}
            </div>

        </dialog>
    )
}