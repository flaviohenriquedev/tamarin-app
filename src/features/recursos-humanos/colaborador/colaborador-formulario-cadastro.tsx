import {LabelContainer} from "@/componentes/ui/data-display/label-container/label-container";
import {InputString} from "@/componentes/ui/data-input/input/input-string";
import {LineContent} from "@/componentes/ui/data-display/line-content/line-content";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";

type Props = {
    colaborador: Colaborador;
}

export function ColaboradorFormularioCadastro({colaborador}: Props) {
    return (
        <>
            <LineContentFill>
                <LabelContainer descricao={`Nome Usuário`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`Nome Completo`}
                        atributo={`nomeCompleto`}/>
                </LabelContainer>
                <LabelContainer descricao={`CPF`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`CPF`}
                        maxLength={11}
                        atributo={`cpf`}/>
                </LabelContainer>
                <LabelContainer descricao={`Email`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`Email Válido`}
                        atributo={`email`}
                        type={`email`}/>
                </LabelContainer>
                <LabelContainer descricao={`Data Nascimento`}>
                    <InputString
                        entidade={colaborador}
                        placeholder={`Data de Nascimento`}
                        atributo={`dataNascimento`}
                        type={`date`}/>
                </LabelContainer>
            </LineContentFill>
        </>
    )
}
