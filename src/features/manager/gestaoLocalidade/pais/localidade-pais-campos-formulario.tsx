import {Pais} from "@/features/manager/gestaoLocalidade/pais/ts/pais";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/input-string";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputNumerico} from "@/components/ui/input/input-numerico";

type Props = {
    entidade: Pais
}

export function LocalidadePaisCamposFormulario({entidade}: Props) {
    return (
        <>
            <LineContent>
                <Label title={`Nome`}>
                    <InputString entidade={entidade} atributo={`nome`}/>
                </Label>
                <Label title={`Sigla`}>
                    <InputString entidade={entidade} atributo={`sigla`}/>
                </Label>
            </LineContent>
            <LineContent>
                <Label title={`Bacen`}>
                    <InputNumerico entidade={entidade} atributo={`bacen`}/>
                </Label>
                <Label title={`DDI`}>
                    <InputNumerico entidade={entidade} atributo={`ddi`}/>
                </Label>
            </LineContent>
        </>
    )
}