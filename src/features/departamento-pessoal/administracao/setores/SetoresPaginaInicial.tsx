'use client'

import {useCallback, useEffect, useState} from "react";
import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {toast} from "sonner";
import Modal from "@/components/ui/modal/modal";
import {Form} from "@/components/ui/form/form";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {Table} from "@/components/ui/table/Table";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {AcaoSalvar} from "@/features/sistema/types";
import {SetoresService} from "@/features/departamento-pessoal/administracao/setores/ts/setores-service";
import {Setor} from "@/features/departamento-pessoal/administracao/setores/ts/setor";
import {setorColunasListagem} from "@/features/departamento-pessoal/administracao/setores/ts/setor-colunas-listagem";
import {DepartamentoService} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento-service";
import useSelectItem from "@/components/ui/select-item/hook/useSelectItem";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {set} from "lodash";

const service = new SetoresService();
const departamentoService = new DepartamentoService();

export function SetoresPaginaInicial() {

    const {selectItens: selectItensDepartamentos} = useSelectItem({
        service: departamentoService,
        fieldDescricao: 'descricao',
        fieldValor: 'id',
    })

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [acaoSalvar, setAcaoSalvar] = useState<AcaoSalvar>()

    const [setor, setSetor] = useState<Setor>(new Setor());
    const [listaSetores, setListaSetores] = useState<Setor[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaSetores(result)
        });
    }, []);

    const atualizarLista = useCallback(() => {
        service.listar().then(result => {
            setListaSetores(result)
        });
    }, []);

    const onSelectDepartamento = useCallback((item: TSelectItem) => {
        const departamento: Departamento = new Departamento();
        departamento.id = item.value as string;
        set(setor, 'departamento', departamento);
    }, [setor])

    function salvar() {
        service.salvar(setor, () => {
            setSetor(new Setor());
            atualizarLista();
            toast.success("Registro salvo com sucesso.");
            if (acaoSalvar === 'SAVE_AND_CLOSE') setOpenModal(false);
        }).then()
    }

    const clear = () => {
        setSetor(new Setor())
    }

    function consultar(entidade: Setor) {
        console.log('SETOR --->', entidade);
        setSetor(entidade);
        setOpenModal(true);
    }

    function excluir(setor: Setor) {
        service.excluir(setor.id).then(() => {
            atualizarLista();
            toast.success("Cadastro deletado.")
        })
    }

    function handleNovoCadastro() {
        setSetor(new Setor())
        setOpenModal(true);
    }

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizarLista}
                            funcaoNovoCadastro={handleNovoCadastro}>
                <Table
                    funcaoAtualizarLista={atualizarLista}
                    lista={listaSetores}
                    colunas={setorColunasListagem}
                    acoesTabela={{consultar: consultar, excluir: excluir}}/>
            </PaginaCadastro>
            <Modal title={'Cadastro de Setor'}
                   isOpen={openModal}
                   setIsOpen={setOpenModal}
                   onCloseModal={clear}>
                <Form onSubmit={salvar}>
                    <LineContent>
                        <InputString
                            label={`Descrição`}
                            entidade={setor}
                            atributo={`descricao`}
                            required/>

                        <SelectItem
                            entidade={setor}
                            fieldValor={'departamento.id'}
                            values={selectItensDepartamentos}
                            onSelect={onSelectDepartamento}/>

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
