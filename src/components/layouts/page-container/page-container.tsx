import {EntidadePadrao} from "@/class/EntidadePadrao";
import {ReactNode, useEffect, useState} from "react";
import {openModal} from "@/utils/utils";
import {Button} from "@/components/ui/button/Button";

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
                                                            onModalOpen
                                                        }: Props<T>) {

    const [idModal, setIdModal] = useState<string>('')

    const generateIdModal = () => {
        setIdModal(Math.random().toString(36))
    }

    useEffect(() => {
        generateIdModal()
    }, [])

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

        </>
    )

}