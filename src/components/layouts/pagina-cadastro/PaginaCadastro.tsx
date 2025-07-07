import {ReactElement, useContext, useEffect} from "react";
import './style.css'
import {Button} from "@/components/ui/button/Button";
import {icones} from "@/components/common/icones";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {AcaoAdicional} from "@/components/layouts/pagina-cadastro/types/typesPaginaCadastro";
import {EmpresaContext} from "@/context/useEmpresa";

type Props = {
    funcaoAtualizarLista?: () => void;
    funcaoNovoCadastro?: () => void;
    children: ReactElement;
    acoesAdicionais?: AcaoAdicional[]
}

export function PaginaCadastro({funcaoAtualizarLista, funcaoNovoCadastro, children, acoesAdicionais}: Props) {
    const {empresa} = useContext(EmpresaContext)

    useEffect(() => {
        if(funcaoAtualizarLista) funcaoAtualizarLista();
    }, [empresa, funcaoAtualizarLista]);

    return (
        <div>
            <header className={`flex items-center justify-between`}>
                {funcaoAtualizarLista && (
                    <ButtonGroup>
                        <Button
                            buttonSize={`sm`}
                            buttonStyle={`info`}
                            onClick={funcaoAtualizarLista}
                        >
                            {icones.reload()}
                        </Button>
                    </ButtonGroup>
                )}
                <ButtonGroup className={`header-pagina-cadastro-botoes ml-auto`}>
                    {acoesAdicionais?.map(acao => (
                        <Button key={acao.label}
                                buttonStyle={acao.estilo}
                                buttonSize={acao.size}
                                onClick={acao.acao}
                                icone={acao.icone}>
                            {acao.label}
                        </Button>
                    ))}
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