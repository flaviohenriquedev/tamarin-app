'use client'

import {PaginaCadastro} from "@/components/layouts/pagina-cadastro/PaginaCadastro";
import {useCallback, useEffect, useState} from "react";
import {AcaoAdicional} from "@/components/layouts/pagina-cadastro/types/typesPaginaCadastro";
import {useRouter} from "next/navigation";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/service/ColaboradorService";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import Modal from "@/components/ui/modal/modal";
import {Avatar} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/Avatar";
import {
    StatusColaboradorFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/enum/StatusColaboradorENUM";
import {formatDateBR} from "@/utils/utils";
import {Button} from "@/components/ui/button/button";
import {icones} from "@/components/common/icones";
import {CropImage} from "@/components/ui/crop-image/CropImage";
import {useCropImage} from "@/components/ui/crop-image/hook/useCropImage";
import {Form} from "@/components/ui/form/form";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {set} from "lodash";

const colaboradorService = new ColaboradorService();

export function ColaboradorAdmissaoInicio() {
    const route = useRouter();

    const [listaColaboradores, setListaColaboradores] = useState<Colaborador[]>([]);
    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const {
        imagem64,
        setImagem64,
        imageSrc,
        handleCrop,
        onCropComplete,
        handleFileChange,
        clearImage
    } = useCropImage({
        onClear: deletarFotoColaborador,
        entidade: colaborador,
        atributo: 'base64'
    });

    useEffect(() => {
        colaboradorService.listarColaboradoresAtivos().then(result => {
            setListaColaboradores(result);
        })
    }, []);

    function deletarFotoColaborador() {
        setColaborador({...colaborador, base64: ''})
    }

    const atualizar = useCallback(() => {
        colaboradorService.listarColaboradoresAtivos().then(result => {
            setListaColaboradores(result);
        })
    }, [])

    function redirecionarParaAdmissao() {
        route.push('/app/dp/gestao/admissao/cadastro')
    }

    function selecionarColaborador(cl: Colaborador) {
        setColaborador(cl);
        setModalIsOpen(true);
    }

    function onSubmit() {
        set(colaborador, 'base64', imagem64);
        colaboradorService.salvar(colaborador).then(() => {
            setModalIsOpen(false);
            atualizar();
        });
    }

    function clear() {
        setColaborador(new Colaborador());
        setImagem64('');
    }

    const acoesAdicionais: AcaoAdicional[] = [
        {
            label: 'Nova Admissão',
            estilo: 'success',
            acao: redirecionarParaAdmissao
        }
    ]

    return (
        <>
            <PaginaCadastro funcaoAtualizarLista={atualizar}
                            acoesAdicionais={acoesAdicionais}>
                <div className={`flex flex-col gap-3 overflow-x-auto min-h-[70vh] max-h-[70vh]`}>
                    {listaColaboradores && listaColaboradores.map(cl => (
                        <div key={cl.id}
                             className={`flex items-center w-full justify-between bg-base-100 rounded-2xl p-3 border border-base-300 shadow-md`}>
                            <div className="flex items-center gap-4 w-[50%]">
                                <Avatar tamanho={`grande`} imagem={cl.base64}/>
                                <div className={`flex flex-col gap-1`}>
                                    <label className="font-bold">{cl.nomeCompleto}</label>
                                    <div className={`flex gap-1 text-[10pt]`}>
                                        <label className="font-semibold">Matricula:</label>
                                        <label>{cl.matricula}</label>
                                    </div>
                                    <label className={`
                                        text-[9pt]
                                        w-fit px-2 py-1
                                        rounded-sm
                                        ${StatusColaboradorFactory.getInfo(cl.statusColaborador).bg}
                                    `}>{StatusColaboradorFactory.getLabel(cl.statusColaborador)}</label>
                                </div>
                            </div>
                            <div className={`flex flex-col w-[50%] gap-1`}>
                                <label>{cl.cargoAtivo.cargo.descricao}</label>
                                <label className="text-sm opacity-50">{cl.cargoAtivo.departamento.descricao}</label>
                                <div className={`flex text-sm gap-2`}>
                                    <label className={`font-semibold`}>Admissão:</label>
                                    <label>{formatDateBR(cl.cargoAtivo.dataAdmissao)}</label>
                                </div>
                            </div>
                            <div className={`flex items-center gap-2 p-4`}>
                                <Button buttonStyle={`info`}
                                        buttonClass={`soft`}
                                        icone={icones.eye}
                                        onClick={() => selecionarColaborador(cl)}>Detalhes</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </PaginaCadastro>

            <Modal isOpen={modalIsOpen}
                   title={`Dados Colaborador`}
                   setIsOpen={setModalIsOpen}
                   onCloseModal={clear}
                   tamanho={`telaInteira`}>
                <Form onSubmit={onSubmit}>
                    <div className={`bg-base-200 rounded-lg flex p-4 w-full h-full shadow-lg`}>
                        <div className={`flex flex-col gap-2`}>
                            <CropImage
                                clearImage={clearImage}
                                imageSrc={imageSrc}
                                handleCrop={handleCrop}
                                onCropComplete={onCropComplete}
                                handleFileChange={handleFileChange}
                            >
                                <Avatar tamanho={`extra-grande`}
                                        imagem={imagem64}/>
                            </CropImage>
                            <div>
                                <label
                                    className={`text-[15pt] font-semibold text-neutral-600`}>{colaborador.nomeCompleto}</label>
                            </div>
                        </div>
                    </div>

                    <ButtonGroup>
                        <Button
                            type={`submit`}
                            buttonSize={`md`}
                        >Salvar</Button>
                    </ButtonGroup>
                </Form>
            </Modal>
        </>
    )
}