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
import {ComponentePerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ComponentePerfilSistema";
import {EmpresaService} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa-service";
import {
    ComponentePerfilSistemaModulos
} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/componente-perfil-sistema-modulos";
import {RouteType} from "@/types/_root/RouteType";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {AcaoSalvar} from "@/features/sistema/types";
import {perfilColunasListagem} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-colunas-listagem";
import {toast} from "sonner";
import {useEmpresa} from "@/context/empresa-context";

const perfilService = new PerfilService();
const empresaService = new EmpresaService();

export function PerfilPaginaInicial() {
    const {empresa} = useEmpresa();
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [perfil, setPerfil] = useState<Perfil>(new Perfil())
    const [perfilSistemaSelecionado, setPerfilSistemaSelecionado] = useState<PerfilSistema>(new PerfilSistema())
    const [clienteSelecionado, setClienteSelecionado] = useState<Empresa>(new Empresa())

    const [listaPerfilSistema, setListaPerfilSistema] = useState<PerfilSistema[]>([])
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
        const novaLista: PerfilSistema[] = []
        empresa.sistemas.forEach(sistema => {
            const perfilSistema: PerfilSistema = new PerfilSistema()
            perfilSistema.keySistema = sistema.keySistema
            novaLista.push(perfilSistema)
        })
        setListaPerfilSistema(novaLista)
        setOpenModal(true);
    }

    function onCloseModal() {
        clear();
    }

    function salvar() {

    }

    function consultar(p: Perfil) {

    }

    function clear() {
        setPerfil(new Perfil())
        setClienteSelecionado(new Empresa())
        setPerfilSistemaSelecionado(new PerfilSistema())
        setListaClientes([])
        setListaModulos([])
        setListaPerfilSistema([])
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

                        <ComponentePerfilSistema
                            className={'cad-perfil-system'}
                            sistemas={listaPerfilSistema}
                            selecionarSistema={() => {}}/>

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