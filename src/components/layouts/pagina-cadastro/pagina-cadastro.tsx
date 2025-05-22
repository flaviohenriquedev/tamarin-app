import {ReactNode, useState} from "react";
import './style.css'
import {Button} from "@/components/ui/button/button";
import {LineContent} from "@/components/ui/line-content/line-content";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {icones} from "@/components/common/icones";
import {Table} from "@/components/ui/table/table";
import {ColumnType} from "@/types/_root/ColumnType";
import {AcoesTabela} from "@/components/ui/table/ts/types";

type Props<E extends object> = {
    funcaoAtualizarLista: () => void;
    onCloseModal: () => void;
    colunas: ColumnType[];
    lista: E[];
    children?: ReactNode;
    camposFormulario: ReactNode;
    onSubmit: () => void;
    title?: string;
    acoesTabela?: AcoesTabela<E>
}

export function PaginaCadastro<E extends object>({funcaoAtualizarLista, onCloseModal, colunas, lista, children, camposFormulario, onSubmit, title, acoesTabela}: Props<E>) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    function handleSubmit() {
        onSubmit();
        setOpen(false)
    }

    function consultarEntidade(entidade: E) {
        if (acoesTabela?.consultar) {
            acoesTabela.consultar(entidade);
            setOpen(true);
        }
    }

    function excluirEntidade(entidade: E) {
        if (acoesTabela?.excluir) {
            acoesTabela.excluir(entidade);
            setOpen(true);
        }
    }

    return (
        <>
            <div className={`container`}>
                <header className={`header-pagina-cadastro`}>
                    <LineContent justifyContent={`end`}>
                        <Button
                            buttonSize={`sm`}
                            buttonStyle={`info`}
                            onClick={funcaoAtualizarLista}
                        >
                            {icones.reload}
                        </Button>
                        <Button
                            buttonSize={`sm`}
                            onClick={handleClick}>
                            Adicionar Novo
                        </Button>
                    </LineContent>
                </header>
                <div className={`content-pagina-cadastro`}>
                    <Table funcaoAtualizarLista={funcaoAtualizarLista}
                           colunas={colunas}
                           lista={lista}
                           acoesTabela={{consultar: consultarEntidade, excluir: excluirEntidade}}/>
                    {children && children}
                </div>
            </div>
            <Modal isOpen={open} onCloseModal={onCloseModal} setIsOpen={setOpen} title={title}>
                <Form className="bg-base-100 text-base-content px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                      onSubmit={handleSubmit}>
                    {camposFormulario}

                    <div className="py-3 sm:flex sm:flex-row-reverse">
                        <LineContent justifyContent={`end`}>
                            <Button buttonSize={`sm`} type={`submit`} buttonStyle={`info`}>Salvar</Button>
                        </LineContent>
                    </div>
                </Form>
            </Modal>
        </>
    )
}