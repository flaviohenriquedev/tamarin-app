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
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import {EmpresaService} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa-service";
import {RouteType} from "@/types/_root/RouteType";
import {AcaoSalvar} from "@/features/sistema/types";
import {perfilColunasListagem} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-colunas-listagem";
import {toast} from "sonner";
import {
    ComponentePerfilSistemaModulos
} from "@/features/manager/gestaoPerfil/perfilModulo/ComponentePerfilSistemaModulos";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuarioLogadoContext";
import {useSistemaContext} from "@/features/sistema/sistema-context";

const perfilService = new PerfilService();
const empresaService = new EmpresaService();

export function PerfilPaginaInicial() {
    const { sistemasModulosFiltrados } = useUsuarioLogado();
    const { sistemaSelecionado } = useSistemaContext();

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [perfil, setPerfil] = useState<Perfil>(new Perfil())

    const [clienteSelecionado, setClienteSelecionado] = useState<Empresa>(new Empresa())

    const [listaModulos, setListaModulos] = useState<RouteType[]>([])
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([]);
    const [listaClientes, setListaClientes] = useState<Empresa[]>([]);

    useEffect(() => {
        perfilService.listar().then(result => setListaPerfil(result))
    }, []);

    const atualizarLista = useCallback(() => {
        perfilService.listar().then(result => setListaPerfil(result))
    }, [])

    function handleNovoCadastro() {
        setListaModulos(sistemasModulosFiltrados.filter(sm => sm.sistema === sistemaSelecionado?.sistema))
        setOpenModal(true);
    }

    function onCloseModal() {
        clear();
    }

    function salvar() {

    }

    function consultar(p: Perfil) {
        setPerfil(p)
        setOpenModal(true);
    }

    function clear() {
        setPerfil(new Perfil())
        setClienteSelecionado(new Empresa())
        setListaClientes([])
        setListaModulos([])
    }

    function deletar(perfil: Perfil) {
        perfilService.excluir(perfil.id).then((response) => {
            if (response) {
                toast.success("Excluido com sucesso.")
                atualizarLista()
            }
        })
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table funcaoAtualizarLista={atualizarLista}
                       colunas={perfilColunasListagem}
                       lista={listaPerfil}
                       acoesTabela={{consultar: consultar, excluir: deletar}}/>
            </PaginaCadastro>

            <Modal
                isOpen={openModal}
                onCloseModal={onCloseModal}
                setIsOpen={setOpenModal}
                title={'Cadastro de Perfil'}>
                <Form className="text-base-content px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
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