import {LabelContainer} from "@/componentes/ui/data-display/label-container/label-container";
import {InputString} from "@/componentes/ui/data-input/input/input-string";
import {LineContent} from "@/componentes/ui/data-display/line-content/line-content";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";
import {Cliente} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente";

type Props = {
    cliente: Cliente;
}

export function ClienteFormularioCadastro({cliente}: Props) {
    return (
        <>
            <LineContentFill>
                <LabelContainer descricao={`Nome Usuário`}>
                    <InputString
                        entidade={cliente}
                        placeholder={`Nome Completo`}
                        atributo={`nome`}/>
                </LabelContainer>
            </LineContentFill>
        </>
    )
}
