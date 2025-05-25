'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {PerfilService} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-service";
import {Table} from "@/components/ui/table/table";
import {useCallback, useEffect, useState} from "react";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";

import './css/style.css'
import {ComponentePerfilCliente} from "@/features/manager/gestaoPerfil/perfil/componente-perfil-cliente";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {ComponentePerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/componente-perfil-sistema";
import {ClienteService} from "@/features/manager/gestaoCliente/cliente/ts/cliente-service";
import {
    ComponentePerfilSistemaModulos
} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/componente-perfil-sistema-modulos";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {RouteType} from "@/types/_root/RouteType";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {AcaoSalvar} from "@/features/sistema/types";
import {perfilColunasListagem} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-colunas-listagem";

const perfilService = new PerfilService();
const clienteService = new ClienteService();

export function PerfilPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [perfil, setPerfil] = useState<Perfil>(new Perfil())
    const [perfilSistemaSelecionado, setPerfilSistemaSelecionado] = useState<PerfilSistema>(new PerfilSistema())
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente>(new Cliente())

    const [listaModulos, setListaModulos] = useState<RouteType[]>([])
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([]);
    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        perfilService.listar().then(result => setListaPerfil(result))
    }, []);

    const atualizarLista = useCallback(() => {
        perfilService.listar().then(result => setListaPerfil(result))
    }, [])

    useEffect(() => {

    }, [perfilSistemaSelecionado]);

    function handleNovoCadastro() {
        clienteService.listar().then(result => {
            setPerfil(new Perfil())
            setListaClientes(result)
            setOpenModal(true);
        })
    }

    function visualizar(p: Perfil) {
        setPerfil(p);
        clienteService.listar().then(result => {
            result.map(rs => rs.sistemas).forEach(lcs => {
                lcs.forEach(cs => cs.checked === p.sistemas.map(cl => cl.clienteSistema.id).includes(cs.id))
            })
            setListaClientes(result)
            setOpenModal(true);
        });
    }

    function onCloseModal() {
        clear();
    }

    function salvar() {
        const perfilFiltrado = new Perfil();
        Object.assign(perfilFiltrado, perfil);
        perfilFiltrado.sistemas = perfil.sistemas.filter(ps => ps.checked);
        perfilFiltrado.cliente = clienteSelecionado;
        perfilService.salvar(perfilFiltrado).then(result => {
            if (result) setListaPerfil(prev => [...prev, result])
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
            clear()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        if (cliente.sistemas.length > 0) {
            cliente.sistemas.forEach(sistema => {
                if (!perfil.sistemas.find(s => s.clienteSistema.id === sistema.id)) {
                    const perfilSistema = new PerfilSistema();
                    perfilSistema.perfil.id = perfil.id;
                    perfilSistema.clienteSistema = sistema;
                    perfil.sistemas.push(perfilSistema);
                }
            })
        }
        setClienteSelecionado(cliente)
    }

    function selecionarPerfilSistema(perfilSistema: PerfilSistema) {
        setPerfilSistemaSelecionado(perfilSistema)
        const rotas = rotasSistema.find(rs => rs.sistema === perfilSistema.clienteSistema.keySistema)?.rotas || [];
        if (rotas && rotas.length > 0) {
            setListaModulos(rotas)
        } else {
            setListaModulos([])
        }
        setPerfilSistemaSelecionado(perfilSistema)
    }

    function clear() {
        setPerfil(new Perfil())
        setClienteSelecionado(new Cliente())
        setPerfilSistemaSelecionado(new PerfilSistema())
        setListaClientes([])
        setListaModulos([])
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table funcaoAtualizarLista={atualizarLista}
                       colunas={perfilColunasListagem}
                       lista={listaPerfil}
                       acoesTabela={{consultar: visualizar}}/>
            </PaginaCadastro>

            <Modal
                isOpen={openModal}
                onCloseModal={onCloseModal}
                setIsOpen={setOpenModal}
                title={'Cadastro de Perfil'}>
                <Form className="bg-base-100 text-base-content px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                      onSubmit={salvar}>

                    <LineContent>
                        <InputString
                            label={`Descrição`}
                            name={`descricao`}
                            atributo={`descricao`}
                            entidade={perfil}
                            required/>
                    </LineContent>

                    <div className={`relative cad-perfil-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>

                        <ComponentePerfilCliente
                            className={'cad-perfil-clients'}
                            listaClientes={listaClientes}
                            selecionarCliente={selecionarCliente}/>

                        <ComponentePerfilSistema
                            className={'cad-perfil-system'}
                            listaPerfilSistema={perfil.sistemas}
                            selecionarPerfilSistema={selecionarPerfilSistema}/>

                        <ComponentePerfilSistemaModulos
                            perfilSistema={perfilSistemaSelecionado}
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