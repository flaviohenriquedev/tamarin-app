'use client'

import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {useCallback, useEffect, useState} from "react";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {LineContent} from "@/components/ui/line-content/line-content";
import {Button} from "@/components/ui/button/button";
import {Table} from "@/components/ui/table/table";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {InputString} from "@/components/ui/input/input-string";
import {InputCPF} from "@/components/ui/input/input-cpf";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {ComponenteUsuarioCliente} from "@/features/manager/gestaoUsuario/usuario/componente-usuario-cliente";
import {ComponenteUsuarioSistema} from "@/features/manager/gestaoUsuario/usuarioSistemas/componente-usuario-sistema";
import {ComponenteUsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/componente-usuario-perfil";
import {usuarioColunasListagem} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-colunas-listagem";
import {UsuarioDto} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-dto";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {PerfilService} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-service";

import './css/style.css'
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";

const service = new UsuarioService()
const clienteService = new ClienteService();
const perfilService = new PerfilService();
const usuarioDto: UsuarioDto = new UsuarioDto();

export function UsuarioPaginaInicial() {

    const [openModal, setOpenModal] = useState(false)
    const [entidade, setEntidade] = useState<Usuario>(new Usuario());
    const [listaEntidade, setListaEntidade] = useState<Usuario[]>([]);
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])
    const [listaClienteSistema, setListaClienteSistema] = useState<ClienteSistema[]>([])
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([])
    const [clienteSistemaSelecionado, setClienteSistemaSelecionado] = useState<ClienteSistema>(new ClienteSistema())


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

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, []);

    useEffect(() => {
        service.listar().then(result => {
            setListaEntidade(result)
        });
    }, [atualizarLista]);

    const handleClick = () => {
        setOpenModal(true)
    }

    function handleSalvar() {
        usuarioDto.listaPerfil = listaPerfil.filter(p => p.checked);
        service.criarUsuario(usuarioDto).then()
    }

    function handleConsultar(usuario: Usuario) {
        console.log('USUARIO', usuario);
        setEntidade(usuario);
    }

    const selecionarCliente = useCallback((cliente: Cliente) => {
        setListaClienteSistema(cliente.sistemas);
        setListaPerfil([])
    }, [])

    const selecionarClienteSistema = useCallback((clienteSistema: ClienteSistema) => {
        setClienteSistemaSelecionado(clienteSistema);
        perfilService.buscarPerfisPorIdClienteSistema(clienteSistema.id).then(result => {
            setListaPerfil(result);
        })
    }, [])

    function onCloseModal(){
        setEntidade(new Usuario())
        setListaClienteSistema([])
        setListaPerfil([])
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={() => setOpenModal(true)}>
                <Table funcaoAtualizarLista={atualizarLista}
                       colunas={usuarioColunasListagem}
                       lista={listaEntidade}/>
            </PaginaCadastro>

            <Modal
                isOpen={openModal}
                onCloseModal={onCloseModal}
                setIsOpen={setOpenModal}
                title={'Cadastro de Usuario'}>
                <Form className="bg-base-100 text-base-content px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                      onSubmit={handleSalvar}>

                    <LineContent>
                        <InputString
                            label={'Nome Completo'}
                            atributo={`usuario.nome`}
                            entidade={usuarioDto}
                            required/>

                        <InputString
                            label={'Email'}
                            atributo={`usuario.email`}
                            entidade={usuarioDto}
                            required/>

                        <InputCPF
                            label={'CPF'}
                            atributo={`usuario.cpf`}
                            entidade={usuarioDto}
                            required/>

                        <InputString
                            label={'Telefone'}
                            atributo={`usuario.telefone`}
                            entidade={usuarioDto}/>

                        <Checkbox
                            label={'Usuário Master'}
                            atributo={'usuario.usuarioMaster'}
                            entidade={usuarioDto}/>

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
                            listaPerfil={listaPerfil}/>
                    </div>

                    <ButtonGroup>
                        <Button
                            buttonSize={`sm`}
                            type={`submit`}
                            buttonStyle={`success`}>Salvar</Button>
                        <Button
                            onClick={() => setOpenModal(false)}
                            buttonSize={`sm`}
                            type={`submit`}
                            buttonStyle={`info`}>Salvar e Fechar</Button>
                        <Button
                            buttonSize={`sm`}
                            type={`button`}
                            buttonStyle={`warning`}>Editar</Button>
                        <Button
                            buttonSize={`sm`}
                            type={`button`}
                            buttonStyle={`error`}>Excluir</Button>
                    </ButtonGroup>
                </Form>
            </Modal>
        </>
    )
}