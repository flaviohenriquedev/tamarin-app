import {ReactNode} from "react";
import {Button} from "@/components/ui/button/button";
import {closeModal} from "@/utils/utils";

type Props = {
    idModal: string
    children: ReactNode
}

export function Modal({idModal, children}: Props) {
    return (
        <dialog id={idModal} className={`modal`}>
            <div className={`modal-box`}>
                <div className={`flex items-center justify-between w-full`}>
                    <label className={`font-bold text-xl`}>Cadastro</label>
                    <Button onClick={() => closeModal(idModal)}>X</Button>
                </div>

                {children}
            </div>

        </dialog>
    )
}
