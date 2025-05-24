import {ReactElement} from "react";
import './style.css'
import {LineContent} from "@/components/ui/line-content/line-content";
import {Button} from "@/components/ui/button/button";
import {icones} from "@/components/common/icones";

type Props = {
    funcaoAtualizarLista: () => void;
    funcaoNovoCadastro: () => void;
    children: ReactElement;
}

export function PaginaCadastro({funcaoAtualizarLista, funcaoNovoCadastro, children}: Props) {

    return (
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
                        onClick={funcaoNovoCadastro}>
                        Adicionar Novo
                    </Button>
                </LineContent>
            </header>
            <div className={`content-pagina-cadastro`}>
                {children}
            </div>
        </div>
    )
}