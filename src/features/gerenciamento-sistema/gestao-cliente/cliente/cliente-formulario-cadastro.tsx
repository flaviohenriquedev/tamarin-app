import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/input-string";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";

type Props = {
    entidade: Cliente;
}

export function ClienteFormularioCadastro({entidade}: Props) {
    return (
        <>
            <LineContentFill>
                <Label title={`Nome Fantasia`}>
                    <InputString
                        entidade={entidade}
                        atributo={`nomeFantasia`}/>
                </Label>

                <Label title={`Razão Social`}>
                    <InputString
                        entidade={entidade}
                        atributo={`razaoSocial`}/>
                </Label>
            </LineContentFill>

            <LineContentFill>
                <Label title={`CNPJ`}>
                    <InputString
                        entidade={entidade}
                        atributo={`cnpj`}/>
                </Label>

                <Label title={`Data de Abertura`}>
                    <InputString
                        entidade={entidade}
                        atributo={`dataAbertura`}/>
                </Label>
            </LineContentFill>
        </>
    )
}