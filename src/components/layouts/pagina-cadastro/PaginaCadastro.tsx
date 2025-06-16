import {ReactElement} from "react";
import './style.css'
import {Button, ButtonStyle} from "@/components/ui/button/button";
import {icones} from "@/components/common/icones";
import {ButtonGroup} from "@/components/ui/button/button-group";

type Props = {
    funcaoAtualizarLista: () => void;
    funcaoNovoCadastro?: () => void;
    children: ReactElement;
    acoesAdicionais?: [{
        label: string;
        acao: () => void;
        estilo?: ButtonStyle;
    }]
}

export function PaginaCadastro({funcaoAtualizarLista, funcaoNovoCadastro, children, acoesAdicionais}: Props) {

    return (
        <div className={`container`}>
            <header className={`header-pagina-cadastro`}>
                <ButtonGroup>
                    {acoesAdicionais?.map(acao => (
                        <Button key={acao.label}
                                buttonStyle={acao.estilo}
                                buttonSize={`sm`}>
                            {acao.label}
                        </Button>
                    ))}
                    <Button
                        buttonSize={`sm`}
                        buttonStyle={`info`}
                        onClick={funcaoAtualizarLista}
                    >
                        {icones.reload}
                    </Button>
                    {funcaoNovoCadastro && (
                        <Button
                            buttonSize={`sm`}
                            onClick={funcaoNovoCadastro}>
                            Adicionar Novo
                        </Button>
                    )}
                </ButtonGroup>
            </header>
            <div className={`content-pagina-cadastro`}>
                {children}
            </div>
        </div>
    )
}