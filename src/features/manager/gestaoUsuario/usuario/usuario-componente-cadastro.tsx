import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {useCallback, useEffect, useState} from "react";

import '@/features/manager/gestaoUsuario/usuario/css/style.css'
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {ComponenteUsuarioCliente} from "@/features/manager/gestaoUsuario/usuario/componente-usuario-cliente";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {ComponenteUsuarioSistema} from "@/features/manager/gestaoUsuario/usuarioSistemas/componente-usuario-sistema";
import {ComponenteUsuarioPerfis} from "@/features/manager/gestaoUsuario/usuarioPerfis/componente-usuario-perfis";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {PerfilSistemaService} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema-service";

type Props = {
    entidade: Usuario
}

const clienteService = new ClienteService();
const perfilSistemaService = new PerfilSistemaService();

export function UsuarioComponenteCadastro({entidade}: Props) {
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])
    const [listaClienteSistema, setListaClienteSistema] = useState<ClienteSistema[]>([])
    const [listaPerfilSistema, setListaPerfilSistema] = useState<PerfilSistema[]>([])

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
            perfilSistemaService.buscarPerfisPorIdClienteSistema(clienteSistema.id).then(result => {
                setListaPerfilSistema(result);
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
                    <InputString
                        atributo={`cpf`}
                        entidade={entidade}/>
                </Label>
                <Label title={`Telefone`}>
                    <InputString
                        atributo={`telefone`}
                        entidade={entidade}/>
                </Label>
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

                <ComponenteUsuarioPerfis
                    className={'cad-user-module'}
                    listaPerfilSistema={listaPerfilSistema}
                />
            </div>
        </>
    )
}