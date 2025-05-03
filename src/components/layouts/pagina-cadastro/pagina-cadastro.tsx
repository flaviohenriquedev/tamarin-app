import {ReactNode, useState} from "react";
import './style.css'
import {Button} from "@/components/ui/button/button";
import {LineContent} from "@/components/ui/line-content/line-content";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";

type Props = {
    children: ReactNode,
    camposFormulario: ReactNode,
    onSubmit: () => void;
    title?: string
}

export function PaginaCadastro({children, camposFormulario, onSubmit, title}: Props) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    function handleSubmit() {
        onSubmit();
        setOpen(false)
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
            <Modal isOpen={open} setIsOpen={setOpen} title={title}>
                <Form className="bg-base-100 text-base-content px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                      onSubmit={handleSubmit}>
                    {camposFormulario}

                    <div className="py-3 sm:flex sm:flex-row-reverse">
                        <LineContent justifyContent={`end`}>
                            <Button type={`submit`} buttonStyle={`info`}>Salvar</Button>
                        </LineContent>
                    </div>
                </Form>
            </Modal>
        </>
    )
}