import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {useCallback, useEffect, useState} from "react";

import '@/features/manager/gestaoUsuario/usuario/css/style.css'
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {ComponenteUsuarioCliente} from "@/features/manager/gestaoUsuario/usuario/componente-usuario-cliente";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {ComponenteUsuarioSistema} from "@/features/manager/gestaoUsuario/usuarioSistemas/componente-usuario-sistema";
import {ComponenteUsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/componente-usuario-perfil";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {InputCPF} from "@/components/ui/input/input-cpf";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {PerfilService} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-service";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";

type Props = {
    entidade: Usuario
}

const clienteService = new ClienteService();
const perfilService = new PerfilService();

export function UsuarioComponenteCadastro({entidade}: Props) {
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])
    const [listaClienteSistema, setListaClienteSistema] = useState<ClienteSistema[]>([])
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([])

    const [clienteSistemaSelecionado, setClienteSistemaSelecionado] = useState<ClienteSistema>(new ClienteSistema())

    const [abrirModalCadastroPerfil, setAbrirModalCadastroPerfil] = useState<boolean>(false);

    useEffect(() => {
        clienteService.listar().then(result => {
            setListaClientes(result)
        })
    }, []);

    const selecionarCliente = useCallback((
        (cliente: Cliente) => {
            if (cliente.sistemas && cliente.sistemas.length > 0) {
                setListaClienteSistema(cliente.sistemas)
            }
        }
    ), [])

    const selecionarClienteSistema = useCallback((
        (clienteSistema: ClienteSistema) => {
            perfilService.buscarPerfisPorIdClienteSistema(clienteSistema.id).then(result => {
                console.log('LOG RESULT ->', result)
                setListaPerfil(result);
            })
            setClienteSistemaSelecionado(clienteSistema)
        }
    ), [])

    return (
        <>
            <LineContent>
                <Label title={`Nome Completo`}>
                    <InputString
                        atributo={`nome`}
                        entidade={entidade}/>
                </Label>
                <Label title={`Email`}>
                    <InputString
                        atributo={`email`}
                        entidade={entidade}/>
                </Label>
                <Label title={`CPF`}>
                    <InputCPF
                        atributo={`cpf`}
                        entidade={entidade}/>
                </Label>
                <Label title={`Telefone`}>
                    <InputString
                        atributo={`telefone`}
                        entidade={entidade}/>
                </Label>

                <Checkbox
                    label={'Usuário Master'}
                    entidade={entidade}
                    atributo={'usuarioMaster'} />

            </LineContent>

            <div className={`relative cad-user-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>

                <ComponenteUsuarioCliente
                    className={'cad-user-clients'}
                    listaClientes={listaClientes}
                    selecionarCliente={selecionarCliente}/>

                <ComponenteUsuarioSistema
                    className={'cad-user-system'}
                    listaClienteSistema={listaClienteSistema}
                    selecionarClienteSistema={selecionarClienteSistema}/>

                <ComponenteUsuarioPerfil
                    className={'cad-user-module'}
                    listaPerfil={listaPerfil}
                />
            </div>
        </>
    )
}