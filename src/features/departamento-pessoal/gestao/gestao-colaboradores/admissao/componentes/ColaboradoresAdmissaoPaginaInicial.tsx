'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {useEffect, useState} from "react";
import {Form} from "@/components/ui/form/form";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import {toast} from "sonner";
import {AcaoSalvar} from "@/features/sistema/types";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/service/ColaboradorService";
import {
    Colaborador
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/Colaborador";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/ColaboradorEndereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/ColaboradorCargo";
import {
    AdmissaoTabs
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/componentes/AdmissaoTabs";

const service = new ColaboradorService();

export function ColaboradoresAdmissaoPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(true);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [entidade, setEntidade] = useState<Colaborador>(new Colaborador());
    const [colaboradorEndereco, setColaboradorEndereco] = useState<ColaboradorEndereco>(new ColaboradorEndereco());
    const [colaboradorCargo, setColaboradorCargo] = useState<ColaboradorCargo>(new ColaboradorCargo());

    function handleNovoCadastro() {
        setEntidade(new Colaborador())
        setOpenModal(true);
    }

    useEffect(() => {
        console.log('ENDEREÇO ->', colaboradorEndereco)
    }, [colaboradorEndereco]);

    const clear = () => {
        setEntidade(new Colaborador());
        setColaboradorCargo(new ColaboradorCargo());
        setColaboradorEndereco(new ColaboradorEndereco());
    }

    function salvar() {
        const entidadeAtualizada: Colaborador = {
            ...entidade,
            colaboradorEndereco,
            listaColaboradorCargo: [colaboradorCargo]
        };

        service.salvar(entidadeAtualizada, () => {
            setEntidade(new Colaborador());
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then();
    }

    return (
        <>
            <PaginaCadastro funcaoNovoCadastro={handleNovoCadastro}>
                <div>
                    Admissão
                </div>
            </PaginaCadastro>
            <Modal title={'Admissão'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar} className={`min-h-[100%]`}>
                    <AdmissaoTabs
                        colaborador={entidade}
                        colaboradorEndereco={colaboradorEndereco}
                        setColaboradorEndereco={setColaboradorEndereco}
                        colaboradorCargo={colaboradorCargo}/>
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