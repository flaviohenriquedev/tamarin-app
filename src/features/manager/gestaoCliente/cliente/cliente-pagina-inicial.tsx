'use client'

import {useCallback, useEffect, useState} from "react";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {ClienteService} from "@/features/manager/gestaoCliente/cliente/ts/cliente-service";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/pagina-cadastro";
import {toast} from "sonner";
import {clienteColunasListagem} from "@/features/manager/gestaoCliente/cliente/ts/cliente-colunas-listagem";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {InputCNPJ} from "@/components/ui/input/input-cnpj";
import {InputDataCompleta} from "@/components/ui/input/input-data-completa";
import {DualListbox} from "@/components/ui/dual-listbox/dual-listbox";
import {DualListboxType, DualListboxValue} from "@/components/ui/dual-listbox/ts/DualListboxType";
import {ClienteSistema} from "@/features/manager/gestaoCliente/clienteSistema/ts/cliente-sistema";
import {SistemaENUM, SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {Table} from "@/components/ui/table/table";

const service = new ClienteService();
type AcaoSalvar = 'SAVE' | 'SAVE_AND_CLOSE'

export function ClientePaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [cliente, setCliente] = useState<Cliente>(new Cliente());

    const [sistemasSelecionados, setSistemasSelecionados] = useState<DualListboxValue[]>([]);
    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);
    const [listaSistemaDualList, setListaSistemaDualList] = useState<DualListboxType[]>([]);
    const [listaSistemaClienteDualList, setListaSistemaClienteDualList] = useState<DualListboxType[]>([]);

    useEffect(() => {
        setListaSistemaDualList(
            rotasSistema.map(item => ({
                label: SistemaENUMFactory.getDescricao(item.sistema),
                value: item.sistema
            }))
        );
    }, []);

    useEffect(() => {
        const lista: DualListboxType[] = [];
        if (cliente.sistemas?.length > 0) {
            cliente.sistemas.map(sistema => {
                lista.push({
                    label: SistemaENUMFactory.getDescricao(sistema.keySistema),
                    value: sistema.keySistema,
                })
            })
        }
        setListaSistemaClienteDualList(lista);
    }, [cliente]);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaClientes(result)
        });
    }, []);

    function salvar() {
        service.salvar(cliente, () => {
            setCliente(new Cliente());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setCliente(new Cliente())
    }

    function consultar(cl: Cliente) {
        setCliente(cl);
        setOpenModal(true);
    }

    function excluir() {
        console.log("excluir");
    }

    function handleNovoCadastro() {
        setCliente(new Cliente())
        setOpenModal(true);
    }

    function addSistema(valor: DualListboxType) {
        const clienteSistema: ClienteSistema = new ClienteSistema();
        clienteSistema.keySistema = valor.value as SistemaENUM;
        cliente.sistemas.push(clienteSistema);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaClientes}
                    colunas={clienteColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Clientes'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>
                    <div className="grid grid-cols-[2fr_1fr] gap-4">
                        <div className={`flex flex-col gap-4`}>
                            <Fieldset label={`Dados Básicos`}>
                                <LineContent>

                                    <InputString
                                        label={`Nome Fantasia`}
                                        entidade={cliente}
                                        atributo={`nomeFantasia`}
                                        required/>

                                    <InputString
                                        label={`Razão Social`}
                                        entidade={cliente}
                                        atributo={`razaoSocial`}
                                        required/>

                                    <InputCNPJ
                                        label={`CNPJ`}
                                        entidade={cliente}
                                        atributo={`cnpj`}
                                        required/>

                                    <InputDataCompleta
                                        label={`Data de Abertura`}
                                        entidade={cliente}
                                        atributo={`dataAbertura`}
                                        required/>

                                </LineContent>

                                <LineContent>

                                    <InputString
                                        label={'Inscrição Estadual'}
                                        entidade={cliente}
                                        atributo={`inscricaoEstadual`}/>

                                    <InputString
                                        label={'Inscrição Municipal'}
                                        entidade={cliente}
                                        atributo={`inscricaoMunicipal`}/>

                                    <InputString
                                        label={`Telefone`}
                                        entidade={cliente}
                                        atributo={`telefone`}/>

                                    <InputString
                                        label={`Email`}
                                        entidade={cliente}
                                        atributo={`email`}/>

                                </LineContent>
                            </Fieldset>
                            <Fieldset label={`Localização`}>
                                <LineContent>

                                    <InputString
                                        label={'Logradouro'}
                                        entidade={cliente}
                                        atributo={`logradouro`}/>

                                    <InputString
                                        label={'Número'}
                                        entidade={cliente}
                                        atributo={`numero`}/>

                                    <InputString
                                        label={`Complemento`}
                                        entidade={cliente}
                                        atributo={`complemento`}/>

                                    <InputString
                                        label={'Bairro'}
                                        entidade={cliente}
                                        atributo={`bairro`}/>

                                </LineContent>

                                <LineContent>

                                    <InputString
                                        label={'Cidade'}
                                        entidade={cliente}
                                        atributo={`cidade`}/>

                                    <InputString
                                        label={'UF'}
                                        entidade={cliente}
                                        atributo={`uf`}/>

                                    <InputString
                                        label={'CEP'}
                                        entidade={cliente}
                                        atributo={`cep`}/>

                                </LineContent>
                            </Fieldset>
                        </div>
                        <Fieldset label={`Sistemas`}>
                            <DualListbox
                                listaA={listaSistemaDualList}
                                listaB={listaSistemaClienteDualList}
                                onAddValor={addSistema}
                                stateRetorno={{
                                    value: sistemasSelecionados,
                                    funcSet: setSistemasSelecionados
                                }}
                            />
                        </Fieldset>
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
