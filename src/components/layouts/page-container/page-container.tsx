import {EntidadePadrao} from "@/class/EntidadePadrao";
import {FormEvent, ReactNode, useEffect, useState} from "react";
import {closeModal, openModal} from "@/utils/utils";
import {Button} from "@/components/ui/button/button";
import {Modal} from "@/components/ui/modal/modal";
import {LineContent} from "@/components/ui/line-content/line-content";

type Props<T extends EntidadePadrao> = {
    children: ReactNode,
    tituloPersonalizadoBotaoNovoCadastro?: string,
    formularioCadastro?: ReactNode,
    onSave: {
        funcaoSalvar: () => Promise<T | null>;
        callBack: () => void;
    },
    onModalOpen?: () => void
}

export function PageContainer<T extends EntidadePadrao>({
                                                            children,
                                                            tituloPersonalizadoBotaoNovoCadastro,
                                                            formularioCadastro,
                                                            onSave,
                                                            onModalOpen
                                                        }: Props<T>) {

    const [idModal, setIdModal] = useState<string>('')

    const generateIdModal = () => {
        setIdModal(Math.random().toString(36))
    }

    useEffect(() => {
        generateIdModal()
    }, [])

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        onSave.funcaoSalvar().then(() => {
            onSave.callBack();
            closeModal(idModal);
        })
    }

    return (
        <>
            <div className={`conteudo-pagina-cabecalho`}>
                <div className={`conteudo-pagina-cabecalho-acoes`}>
                    <Button type={'button'}
                            onClick={() => {
                                openModal(idModal);
                                onModalOpen?.();
                            }}>
                        {
                            tituloPersonalizadoBotaoNovoCadastro
                                ? tituloPersonalizadoBotaoNovoCadastro
                                : 'Novo Cadastro'
                        }
                    </Button>
                </div>
            </div>

            <div className={`conteudo-pagina-children`}>{children}</div>

            <Modal idModal={`${idModal}`}>
                <form onSubmit={onSubmit}>
                    {formularioCadastro}

                    <LineContent justifyContent={`end`}>
                        <Button type={'submit'}>Salvar</Button>
                    </LineContent>
                </form>
            </Modal>
        </>
    )

}