'use client'

import {ReactNode, useState} from "react";
import './style.css'
import {Button} from "@/components/ui/button/button";
import {LineContent} from "@/components/ui/line-content/line-content";
import Modal from "@/components/ui/modal/modal";

type Props = {
    children: ReactNode,
    formularioCadastro: ReactNode,
}

export function PaginaCadastro({children, formularioCadastro}: Props) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
    }

    return (
        <>
            <div className={`container`}>
                <header className={`header-pagina-cadastro`}>
                    <LineContent justifyContent={`end`}>
                        <Button
                            buttonSize={`xs`}
                            onClick={handleClick}>
                            Adicionar Novo
                        </Button>
                    </LineContent>
                </header>
                <div className={`content-pagina-cadastro`}>
                    {children}
                </div>
            </div>

            {/*<Modal idModal={`dialog-register`}>*/}
            {/*    {formularioCadastro}*/}
            {/*</Modal>*/}

            <Modal isOpen={open} setIsOpen={setOpen}>
                {formularioCadastro}
            </Modal>
        </>
    )
}