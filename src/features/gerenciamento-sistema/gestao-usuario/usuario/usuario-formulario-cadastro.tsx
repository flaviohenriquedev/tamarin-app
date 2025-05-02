import {LabelContainer} from "@/componentes/ui/data-display/label-container/label-container";
import {InputString} from "@/componentes/ui/data-input/input/input-string";
import {LineContent} from "@/componentes/ui/data-display/line-content/line-content";
import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/ts/usuario";
import {Util} from "@/util/util";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";

type Props = {
    usuario: Usuario;
}

export function UsuarioFormularioCadastro({usuario}: Props) {
    return (
        <LineContentFill>
            <LabelContainer descricao={`Nome Usuário`}>
                <InputString
                    entidade={usuario}
                    placeholder={`Nome Completo`}
                    atributo={`nome`}/>
            </LabelContainer>

            <LabelContainer descricao={`Email`}>
                <InputString
                    entidade={usuario}
                    placeholder={`Email Válido`}
                    atributo={`email`}
                    type={`email`}/>
            </LabelContainer>

            <LabelContainer descricao={`CPF`}>
                <InputString
                    entidade={usuario}
                    placeholder={`CPF`}
                    maxLength={11}
                    atributo={`cpf`}/>
            </LabelContainer>
        </LineContentFill>
    )
}