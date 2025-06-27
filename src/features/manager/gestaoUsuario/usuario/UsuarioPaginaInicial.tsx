'use client'

import {UsuarioService} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-service";
import {useCallback, useEffect, useState} from "react";
import {LineContent} from "@/components/ui/line-content/line-content";
import {Button} from "@/components/ui/button/Button";
import {Table} from "@/components/ui/table/Table";
import Modal from "@/components/ui/modal/Modal";
import {Form} from "@/components/ui/form/form";
import {InputString} from "@/components/ui/input/InputString";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {ComponenteUsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/componente-usuario-perfil";
import {usuarioColunasListagem} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-colunas-listagem";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";

import './css/style.css'
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {UsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/ts/usuario-perfil";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/Perfil";
import {AcaoSalvar} from "@/features/sistema/types";
import {toast} from "sonner";
import {PerfilService} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-service";
import {
    ComponentePerfilSistemaModulos
} from "@/features/manager/gestaoPerfil/perfilModulo/ComponentePerfilSistemaModulos";
import {RouteType} from "@/types/_root/RouteType";
import {useSistemaContext} from "@/features/sistema/sistema-context";
import {getRotasPorSistema} from "@/features/sistema/functions";

const usuarioService = new UsuarioService()
const perfilService = new PerfilService()

export function UsuarioPaginaInicial() {
    const {sistemaSelecionado} = useSistemaContext();

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [usuario, setUsuario] = useState<Usuario>(new Usuario());
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>();
    const [usuarioPerfil, setUsuarioPerfil] = useState<UsuarioPerfil>(new UsuarioPerfil());

    const [perfil, setPerfil] = useState<Perfil>(new Perfil());

    const [listaUsuario, setListaUsuario] = useState<Usuario[]>([]);
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([]);
    const [listaModulos, setListaModulos] = useState<RouteType[]>([])

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

    const handleEmailBlur = async () => {
        if (!usuario.email) return;
        usuarioService.buscarUsuarioPorEmail(usuario.email).then(result => {
            if(result && result.id) setUsuario(result)
        });
    };

    const handleConsultar = (usuario: Usuario) => {
        setUsuario(usuario);
        setOpenModal(true);
    }

    const handleNovoCadastro = () => {
        perfilService.listar().then(result => {
            console.log('PERFIS -----> ', result);
            setListaPerfil(result);
            setOpenModal(true);
        })
    };

    function onSelectPerfil(p: Perfil) {
        setPerfil(p);
        if (sistemaSelecionado) setListaModulos(getRotasPorSistema(sistemaSelecionado))
    }

    const handleSalvar = () => {
        listaPerfil.filter(p => p.checked).forEach(pf => {
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
        setListaPerfil([]);
        setListaModulos([]);
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
                            label={'Email'}
                            atributo={`email`}
                            entidade={usuario}
                            required
                            onBlur={handleEmailBlur}/>

                        <InputString
                            label={'Nome Completo'}
                            atributo={`nome`}
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
                        <ComponenteUsuarioPerfil
                            onSelectPerfil={onSelectPerfil}
                            className={'cad-user-module'}
                            listaPerfil={listaPerfil}/>

                        <ComponentePerfilSistemaModulos
                            perfil={perfil}
                            className={'cad-perfil-module'}
                            listaModulos={listaModulos}/>

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