'use client'

import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {useCallback, useEffect, useState} from "react";
import {LineContent} from "@/components/ui/line-content/line-content";
import {Button} from "@/components/ui/button/button";
import {Table} from "@/components/ui/table/table";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {InputString} from "@/components/ui/input/input-string";
import {InputCPF} from "@/components/ui/input/input-cpf";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {ComponenteUsuarioSistema} from "@/features/manager/gestaoUsuario/usuarioSistemas/componente-usuario-sistema";
import {ComponenteUsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/componente-usuario-perfil";
import {usuarioColunasListagem} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-colunas-listagem";
import {ButtonGroup} from "@/components/ui/button/button-group";

import './css/style.css'
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {UsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/ts/usuario-perfil";
import {EmpresaSistema} from "@/features/manager/gestaoEmpresa/empresaSistema/ts/empresa-sistema";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {AcaoSalvar} from "@/features/sistema/types";
import {toast} from "sonner";

const usuarioService = new UsuarioService()

export function UsuarioPaginaInicial() {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [usuario, setUsuario] = useState<Usuario>(new Usuario());
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>();
    const [usuarioPerfil, setUsuarioPerfil] = useState<UsuarioPerfil>(new UsuarioPerfil());

    const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);
    const [listaClienteSistema, setListaClienteSistema] = useState<EmpresaSistema[]>([]);
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([]);
    const [listaPerfilFiltrado, setListaPerfilFiltrado] = useState<Perfil[]>([]);

    const atualizarLista = useCallback(() => {
        usuarioService.listar().then(result => {
            setListaUsuario(result)
        });
    }, []);

    useEffect(() => {
        usuarioService.listar().then(result => {
            setListaUsuario(result)
        });
    }, [atualizarLista]);

    const handleConsultar = (usuario: Usuario) => {
        setUsuario(usuario);
        setOpenModal(true);
    }

    const handleNovoCadastro = () => {
        setOpenModal(true);
    };

    const handleSalvar = () => {
        listaPerfilFiltrado.filter(p => p.checked).forEach(pf => {
            const usuarioPerfil: UsuarioPerfil = new UsuarioPerfil();
            usuarioPerfil.usuario.id = usuario.id;
            usuarioPerfil.perfil = pf;
            usuario.perfis.push(usuarioPerfil)
        })
        usuarioService.salvar(usuario).then(result => {
            if (result) setListaUsuario(prev => [...prev, result]);
            setOpenModal(false);
            toast.success("Registro salvo com sucesso.");
        })
    }

    const onCloseModal = () => {
        clear();
    }

    const clear = () => {
        setUsuario(new Usuario());
        setUsuarioPerfil(new UsuarioPerfil());
        setListaClienteSistema([]);
        setListaPerfil([]);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table funcaoAtualizarLista={atualizarLista}
                       colunas={usuarioColunasListagem}
                       lista={listaUsuario}
                       acoesTabela={{consultar: handleConsultar}}/>
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
                            atributo={`nome`}
                            entidade={usuario}
                            required/>

                        <InputString
                            label={'Email'}
                            atributo={`email`}
                            entidade={usuario}
                            required/>

                        <InputCPF
                            label={'CPF'}
                            atributo={`cpf`}
                            entidade={usuario}
                            required/>

                        <InputString
                            label={'Telefone'}
                            atributo={`telefone`}
                            entidade={usuario}/>

                        <Checkbox
                            label={'Usuário Master'}
                            atributo={'usuarioMaster'}
                            entidade={usuario}/>

                    </LineContent>

                    <div className={`relative cad-user-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>

                        <ComponenteUsuarioSistema
                            className={'cad-user-system'}
                            listaClienteSistema={[]}
                            selecionarClienteSistema={() => {}}/>

                        <ComponenteUsuarioPerfil
                            className={'cad-user-module'}
                            listaPerfil={listaPerfilFiltrado}/>
                    </div>

                    <ButtonGroup>
                        <Button
                            onClick={() => setAcaoSalvar('SAVE')}
                            buttonSize={`sm`}
                            type={`submit`}
                            buttonStyle={`success`}>Salvar</Button>
                        <Button
                            onClick={() => setAcaoSalvar('SAVE_AND_CLOSE')}
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