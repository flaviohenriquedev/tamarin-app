import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {Pessoa} from "@/features/recursos-humanos/gestao-pessoa/pessoa/ts/pessoa";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/input-string";

type Props = {
    entidade: Pessoa;
}

export function PessoaFormularioCadastro({entidade}: Props) {
    return (
        <>
            <LineContentFill>
                <Label title={`Nome Completo`}>
                    <InputString
                        entidade={entidade}
                        placeholder={`Nome Completo`}
                        atributo={`nomeCompleto`}/>
                </Label>
            </LineContentFill>
        </>
    )
}
