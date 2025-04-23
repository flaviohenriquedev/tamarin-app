import {LabelContainer} from "@/componentes/ui/data-display/label-container/label-container";
import {InputString} from "@/componentes/ui/data-input/input/input-string";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";
import {Pessoa} from "@/sistema/recursos-humanos/modulos/pessoa/ts/pessoa";

type Props = {
    entidade: Pessoa;
}

export function PessoaFormularioCadastro({entidade}: Props) {
    return (
        <>
            <LineContentFill>
                <LabelContainer descricao={`Nome Completo`}>
                    <InputString
                        entidade={entidade}
                        placeholder={`Nome Completo`}
                        atributo={`nomeCompleto`}/>
                </LabelContainer>
            </LineContentFill>
        </>
    )
}
