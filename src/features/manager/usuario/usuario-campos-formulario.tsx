import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {SelectItem} from "@/components/ui/select-item/select-item";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {RoleUsuarioFactory} from "@/features/manager/usuario/ts/role-enum";
import {DualListbox} from "@/components/ui/dual-listbox/dual-listbox";
import {useEffect, useState} from "react";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {UsuarioDTO} from "@/features/manager/usuario/ts/usuario-dto";

type Props = {
    entidade: UsuarioDTO
}

const rolesSelectItem: TSelectItem[] = RoleUsuarioFactory.getSelectItens();
const service = new ClienteService();

export function UsuarioCamposFormulario({ entidade }: Props) {

    const [listaEntidade, setListaEntidade] = useState<Cliente[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, []);

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
                <LineContent>
                    <Label title={`Clientes`}>
                        <DualListbox
                            listaEntidade={listaEntidade}
                            fieldLabel={`nomeFantasia`}
                            listaDestino={entidade.clientes}/>
                    </Label>
                </LineContent>
            </>
    )
}