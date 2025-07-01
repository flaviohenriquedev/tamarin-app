'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {useState} from "react";
import {Form} from "@/components/ui/form/Form";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import {toast} from "sonner";
import {AcaoSalvar} from "@/features/sistema/types";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/service/ColaboradorService";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/ColaboradorEndereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/ColaboradorCargo";
import {
    AdmissaoTabs
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/cadastro/components/AdmissaoTabs";
import {useSearchParams} from "next/navigation";
import {getBooleanFromString} from "@/utils/utils";

const service = new ColaboradorService();

export function ColaboradorAdmissaoCadastro() {

    const searchParams = useSearchParams();
    const cdt = searchParams.get('cdt');

    const [openModal, setOpenModal] = useState<boolean>(getBooleanFromString(cdt));
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [entidade, setEntidade] = useState<Colaborador>(new Colaborador());
    const [colaboradorEndereco, setColaboradorEndereco] = useState<ColaboradorEndereco>(new ColaboradorEndereco());
    const [colaboradorCargo, setColaboradorCargo] = useState<ColaboradorCargo>(new ColaboradorCargo());

    function handleNovoCadastro() {
        setEntidade(new Colaborador())
        setOpenModal(true);
    }

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