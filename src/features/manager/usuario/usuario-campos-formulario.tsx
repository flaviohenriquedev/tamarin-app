import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Usuario} from "@/features/manager/usuario/ts/usuario";
import {Label} from "@/components/ui/label/label";
import {SelectItem} from "@/components/ui/select-item/select-item";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {RoleUsuarioFactory} from "@/features/manager/usuario/ts/role-enum";

type Props = {
    entidade: Usuario
}

const rolesSelectItem: TSelectItem[] = RoleUsuarioFactory.getSelectItens();

export function UsuarioCamposFormulario({ entidade }: Props) {
    return (
        <>
            <LineContent>
                <Label title={`Nome`}>
                    <InputString entidade={entidade} atributo={`nome`}/>
                </Label>
                <Label title={`CPF`}>
                    <InputString entidade={entidade} atributo={`cpf`}/>
                </Label>

            </LineContent>
            <LineContent>
                <Label title={`Email`}>
                    <InputString type={`email`} entidade={entidade} atributo={`email`}/>
                </Label>

                <Label title={`Regra`}>
                    <SelectItem values={rolesSelectItem} onSelect={() => {}}/>
                </Label>
            </LineContent>
        </>
    )
}