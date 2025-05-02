import {Departamento} from "@/features/recursos-humanos/gestao-departamento/departamento/ts/departamento";
import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/input-string";

type Props = {
    entidade: Departamento;
}

export function DepartamentoFormularioCadastro({entidade}: Props) {
    return (
        <>
            <LineContentFill>
                <Label title={`Descrição`}>
                    <InputString
                        entidade={entidade}
                        placeholder={`Descrição`}
                        atributo={`descricao`}/>
                </Label>
            </LineContentFill>
        </>
    )
}
