import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
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
import {UsuarioCliente} from "@/features/manager/gestaoUsuario/usuarioCliente/ts/usuario-cliente";

type Props = {
    entidade: Usuario
}

const clienteService = new ClienteService();
const perfilService = new PerfilService();

export function UsuarioComponenteCadastro({entidade}: Props) {
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])
    const [listaClienteSistema, setListaClienteSistema] = useState<ClienteSistema[]>([])
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([])

    useEffect(() => {
        clienteService.listar().then(result => {
            const idsSelecionados = entidade.clientes.map(ec => ec.cliente.id);
            const clientesAtualizados = result.map(cl => ({
                ...cl,
                checked: idsSelecionados.includes(cl.id)
            }));
            setListaClientes(clientesAtualizados);
        });
    }, [entidade.clientes]);

    const selecionarCliente = useCallback((cliente: Cliente) => {
        setListaClienteSistema(cliente.sistemas);

        perfilService.buscarPerfisPorIdCliente(cliente.id).then(result => {
            setListaPerfil(result);
        })
    }, [])

    const selecionarClienteSistema = useCallback((clienteSistema: ClienteSistema) => {
        perfilService.buscarPerfisPorIdClienteSistema(clienteSistema.id).then(result => {
            setListaPerfil(result);
        })
    }, [])

    const checkCliente = (cliente: Cliente, valorCheck: boolean) => {
        if (valorCheck) {
            const usuarioCliente: UsuarioCliente = new UsuarioCliente();
            usuarioCliente.cliente = cliente;

            if (entidade.clientes && entidade.clientes.length > 0) {
                const index = entidade.clientes.findIndex(cliente => cliente.cliente.id === cliente.id)
                if (index > -1) {
                    return;
                }
            }
            return entidade.clientes.push(usuarioCliente);
        } else {
            if (entidade.clientes && entidade.clientes.length > 0) {
                const index = entidade.clientes.map(uc => uc.cliente).findIndex(c => c.id === cliente.id)
                if (index > -1) {
                    entidade.clientes.splice(index, 1);
                }
            }
        }

    }

    return (
        <>
            <LineContent>
                <InputString
                    label={'Nome Completo'}
                    atributo={`nome`}
                    entidade={entidade}
                    required/>

                <InputString
                    label={'Email'}
                    atributo={`email`}
                    entidade={entidade}
                    required/>

                <InputCPF
                    label={'CPF'}
                    atributo={`cpf`}
                    entidade={entidade}
                    required/>

                <InputString
                    label={'Telefone'}
                    atributo={`telefone`}
                    entidade={entidade}/>

                <Checkbox
                    label={'Usuário Master'}
                    entidade={entidade}
                    atributo={'usuarioMaster'}/>

            </LineContent>

            <div className={`relative cad-user-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>

                <ComponenteUsuarioCliente
                    onCheckCliente={checkCliente}
                    className={'cad-user-clients'}
                    listaClientes={listaClientes}
                    selecionarCliente={selecionarCliente}/>

                <ComponenteUsuarioSistema
                    className={'cad-user-system'}
                    listaClienteSistema={listaClienteSistema}
                    selecionarClienteSistema={selecionarClienteSistema}/>

                <ComponenteUsuarioPerfil
                    className={'cad-user-module'}
                    listaPerfil={listaPerfil}/>
            </div>
        </>
    )
}