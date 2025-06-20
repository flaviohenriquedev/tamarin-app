import {ReactElement} from "react";
import './style.css'
import {Button} from "@/components/ui/button/button";
import {icones} from "@/components/common/icones";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {AcaoAdicional} from "@/components/layouts/pagina-cadastro/types/typesPaginaCadastro";

type Props = {
    funcaoAtualizarLista?: () => void;
    funcaoNovoCadastro?: () => void;
    children: ReactElement;
    acoesAdicionais?: AcaoAdicional[]
}

export function PaginaCadastro({funcaoAtualizarLista, funcaoNovoCadastro, children, acoesAdicionais}: Props) {
    return (
        <div className={`container`}>
            <header className={`header-pagina-cadastro `}>
                <ButtonGroup className={`header-pagina-cadastro-botoes `}>
                    {acoesAdicionais?.map(acao => (
                        <Button key={acao.label}
                                buttonStyle={acao.estilo}
                                buttonSize={`sm`}
                                onClick={acao.acao}>
                            {acao.label}
                        </Button>
                    ))}
                    {funcaoAtualizarLista && (
                        <Button
                            buttonSize={`sm`}
                            buttonStyle={`info`}
                            onClick={funcaoAtualizarLista}
                        >
                            {icones.reload}
                        </Button>
                    )}
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