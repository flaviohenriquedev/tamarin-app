'use client'

import {ColaboradorService} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador-service";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {useCallback, useEffect, useState} from "react";
import {Colaborador} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador";
import {Table} from "@/components/ui/table/table";
import {
    colunasColaborador
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador-colunas-listagem";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {toast} from "sonner";
import {InputString} from "@/components/ui/input/InputString";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {InputNumerico} from "@/components/ui/input/InputNumerico";
import {LineContent} from "@/components/ui/line-content/line-content";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {AcaoSalvar} from "@/features/sistema/types";
import {InputTelefone} from "@/components/ui/input/InputTelefone";
import {FotoPerfilUploader} from "@/components/ui/foto-perfil-uploader/foto-perfil-uploader";

const colaboradorService = new ColaboradorService();

export function ColaboradorPaginaInicial() {

    const [openModal, setOpenModal] = useState(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());
    const [listaColaborador, setListaColaborador] = useState<Colaborador[]>([]);

    useEffect(() => {
        colaboradorService.listar().then(result => {
            setListaColaborador(result);
        })
    }, []);

    const atualizar = useCallback(() => {
        colaboradorService.listar().then(result => setListaColaborador(result));
    }, [])

    const novo = useCallback(() => {
        setOpenModal(true)
    }, [])


    function salvar() {
        colaboradorService.salvar(colaborador, () => {
            setColaborador(new Colaborador());
            atualizar();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    function excluir(colaborador: Colaborador) {
        colaboradorService.excluir(colaborador.id).then(() => {
            atualizar();
            toast.success("Cadastro deletado.")
        })
    }

    function visualizar(colaborador: Colaborador) {
        setColaborador(colaborador);
        setOpenModal(true);
    }

    function onCloseModal() {
        setColaborador(new Colaborador());
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizar}
                            funcaoNovoCadastro={novo}>
                <Table funcaoAtualizarLista={atualizar}
                       lista={listaColaborador}
                       colunas={colunasColaborador}
                       acoesTabela={{consultar: visualizar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal
                title={'Cadastro de Colaborador'}
                isOpen={openModal}
                setIsOpen={setOpenModal}
                onCloseModal={onCloseModal}>
                <Form onSubmit={salvar}>
                    <div className={'flex gap-4'}>
                        <div className={`flex flex-col`}>
                            <LineContent>
                                <InputString
                                    id={`colaborador_nome_completo`}
                                    label={'Nome Completo'}
                                    atributo={'nomeCompleto'}
                                    entidade={colaborador}/>

                                <InputCPF
                                    label={'CPF'}
                                    atributo={'cpf'}
                                    entidade={colaborador}/>

                                <InputDataCompleta
                                    label={'Data de Nascimento'}
                                    atributo={'dataNascimento'}
                                    entidade={colaborador}/>

                                <InputString
                                    label={'Sexo'}
                                    atributo={'sexo'}
                                    entidade={colaborador}/>

                            </LineContent>

                            <LineContent>

                                <InputString
                                    id={`colaborador_email`}
                                    label={'Email'}
                                    atributo={'email'}
                                    entidade={colaborador}
                                    type={'email'}/>

                                <InputTelefone
                                    label={`Telefone`}
                                    atributo={'telefone'}
                                    entidade={colaborador}/>
                            </LineContent>
                            <LineContent>
                                <InputDataCompleta
                                    label={'Data de Admissão'}
                                    atributo={'dataAdmissao'}
                                    entidade={colaborador}/>
                                <InputDataCompleta
                                    label={'Data de Demissão'}
                                    atributo={'dataDemissao'}
                                    entidade={colaborador}/>
                                <InputNumerico
                                    label={'Salário'}
                                    atributo={'salario'}
                                    entidade={colaborador}/>
                                <InputString
                                    label={'Tipo de Contrato'}
                                    atributo={'tipoContrato'}
                                    entidade={colaborador}/>
                            </LineContent>

                            <LineContent>
                                <InputString
                                    label={'Endereço'}
                                    atributo={'endereco'}
                                    entidade={colaborador}/>

                                <InputString
                                    label={'Cargo'}
                                    atributo={'cargo'}
                                    entidade={colaborador}/>

                                <InputString
                                    label={'Departamento'}
                                    atributo={'departamento'}
                                    entidade={colaborador}/>
                            </LineContent>

                            <LineContent>
                                <InputString
                                    label={'Observações'}
                                    atributo={'observacoes'}
                                    entidade={colaborador}/>
                            </LineContent>
                        </div>


                        <div>
                            <LineContent>
                                <FotoPerfilUploader/>
                            </LineContent>
                        </div>
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
                    </ButtonGroup>
                </Form>
            </Modal>
        </>
    )
}
