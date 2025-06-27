'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {toast} from "sonner";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {Table} from "@/components/ui/table/Table";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {AcaoSalvar} from "@/features/sistema/types";
import {
    CargaHorariaService
} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria-service";
import {CargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria";
import {
    cargaHorariaColunasListagem
} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria-colunas-listagem";
import {InputNumerico} from "@/components/ui/input/InputNumerico";

const service = new CargaHorariaService();

export function CargaHorariaPaginaInicial() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [cargaHoraria, setCargaHoraria] = useState<CargaHoraria>(new CargaHoraria());
    const [listaCargasHoraria, setListaCargasHoraria] = useState<CargaHoraria[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaCargasHoraria(result)
        });
    }, []);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaCargasHoraria(result)
        });
    }, []);

    function salvar() {
        service.salvar(cargaHoraria, () => {
            setCargaHoraria(new CargaHoraria());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setCargaHoraria(new CargaHoraria())
    }

    function consultar(entidade: CargaHoraria) {
        setCargaHoraria(entidade);
        setOpenModal(true);
    }

    function excluir(entidade: CargaHoraria) {
        service.excluir(entidade.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setCargaHoraria(new CargaHoraria())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaCargasHoraria}
                    colunas={cargaHorariaColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Carga Horária'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>
                    <LineContent>
                        <InputNumerico
                            label={`Hora Inicial`}
                            entidade={cargaHoraria}
                            atributo={`horaInicial`}
                            required/>
                        <InputNumerico
                            label={`Hora Final`}
                            entidade={cargaHoraria}
                            atributo={`horaFinal`}
                            required/>
                        <InputNumerico
                            label={`Hora Almoço`}
                            entidade={cargaHoraria}
                            atributo={`horaAlmoco`}
                            required/>
                    </LineContent>

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
