'use client'

import {Fragment, useCallback, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import Modal from "@/components/ui/modal/modal";
import usePaginaCadastro from "@/components/layouts/pagina-cadastro/hook/usePaginaCadastro";
import {
    ColaboradorDesligamentoService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/cadastro/service/ColaboradorDesligamentoService";
import {
    ColaboradorDesligamento
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/cadastro/entidade/ColaboradorDesligamento";
import {BuscaColaborador} from "@/features/departamento-pessoal/gestao/gestao-ferias/components/BuscaColaborador";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {Form} from "@/components/ui/form/form";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import {
    TipoDesligamentoCLTFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/ts/TipoDesligamentoCLTEnum";
import {InputRadio} from "@/components/ui/input/inputRadio/InputRadio";
import {TrueFalseFactory} from "@/features/_root/enums/TrueFalseENUM";
import {isTrue} from "@/utils/utils";
import {Label} from "@/components/ui/label/label";

const desligamentoService = new ColaboradorDesligamentoService();

export function ColaboradorDesligamentoCadastro() {

    const [habilitarAvisoPrevio, setHabilitarAvisoPrevio] = useState<boolean>(false);
    const [colaboradorDesligamento, setColaboradorDesligamento] = useState<ColaboradorDesligamento>(new ColaboradorDesligamento());

    const clear = useCallback(() => {
        setColaboradorDesligamento(new ColaboradorDesligamento());
    }, [])

    const {
        isOpenModal,
        setIsOpenModal,
        salvar,
        setAcaoSalvar
    } = usePaginaCadastro<ColaboradorDesligamento, ColaboradorDesligamentoService>({
        service: desligamentoService,
        onCloseModal: clear,
        iniciarModalAberto: true
    })

    const novo = useCallback(() => {
        setIsOpenModal(true);
    }, [setIsOpenModal])

    function onSubmit() {
        salvar(colaboradorDesligamento).then()
    }

    const onChangeAvisoPrevio = useCallback((v: string) => {
        setHabilitarAvisoPrevio(isTrue(v))
    }, [])

    return (
        <>
            <PaginaCadastro funcaoNovoCadastro={novo}>
                <div>Cadastro Desligamento</div>
            </PaginaCadastro>

            <Modal title={`Desligamento`}
                   isOpen={isOpenModal}
                   setIsOpen={setIsOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={onSubmit} className={`min-h-[100%]`}>
                    <div className={`flex flex-col gap-6`}>
                        <BuscaColaborador entidade={colaboradorDesligamento}
                                          atributo={`colaborador`}/>
                        <LineContent>
                            <SelectItem
                                label={`Tipo Desligamento`}
                                entidade={colaboradorDesligamento}
                                fieldValor={'tipoDesligamento'}
                                values={new TipoDesligamentoCLTFactory().getSelectItens()} />

                            <InputDataCompleta
                                label={`Data Desligamento`}
                                entidade={colaboradorDesligamento}
                                atributo={'dataDesligamento'} />
                        </LineContent>

                        <LineContent>

                            <Label title={`Cumprir Aviso?`}>
                                <InputRadio
                                    entidade={colaboradorDesligamento}
                                    atributo={`avisoPrevio`}
                                    valores={TrueFalseFactory.getSelectItens()}
                                    onChange={onChangeAvisoPrevio}/>

                            </Label>

                            <InputDataCompleta
                                disabled={!habilitarAvisoPrevio}
                                label={`Data Início Aviso`}
                                entidade={colaboradorDesligamento}
                                atributo={`dataInicioAvisoPrevio`} />

                            <InputDataCompleta
                                disabled={!habilitarAvisoPrevio}
                                label={`Data Início Aviso`}
                                entidade={colaboradorDesligamento}
                                atributo={`dataFimAvisoPrevio`} />
                        </LineContent>
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
                            buttonStyle={`info`}>Salvar e Finalizar</Button>
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