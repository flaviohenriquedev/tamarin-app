import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {RoleUsuarioFactory} from "@/features/manager/usuario/ts/role-enum";
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
                    <Label title={`Nome Completo`}>
                        <InputString entidade={entidade} atributo={`nome`}/>
                    </Label>
                </LineContent>
                <LineContent>
                    <Label title={`CPF`}>
                        <InputString entidade={entidade} atributo={`cpf`}/>
                    </Label>
                    <Label title={`Email`}>
                        <InputString type={`email`} entidade={entidade} atributo={`email`}/>
                    </Label>
                </LineContent>
            </>
    )
}