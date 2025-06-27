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
import {useCropImage} from "@/components/ui/crop-image/hook/useCropImage";
import {Form} from "@/components/ui/form/form";
import {get, set} from "lodash";
import {CropImage} from "@/components/ui/crop-image/CropImage";
import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import {EtniaFactory} from "@/features/_root/enums/EtniaENUM";
import {InputTelefone} from "@/components/ui/input/InputTelefone";
import {InputSearch} from "@/components/ui/input/inpustSearch/InputSearch";
import {GeneroFactory} from "@/features/_root/enums/GeneroENUM";
import {EstadoCivilFactory} from "@/features/_root/enums/EstadoCivilENUM";
import {InputSearchConfig} from "@/components/ui/input/inpustSearch/useInputSearch";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/CidadeService";
import {ViaCepService} from "@/features/apis/viaCep/service/ViaCepService";
import {InputMoeda} from "@/components/ui/input/InputMoeda";
import {
    TipoSalarioFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/cadastro/enums/TipoSalarioENUM";
import {
    FormaPagamentoFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/cadastro/enums/FormaPagamentoENUM";
import {TrueFalseFactory} from "@/features/_root/enums/TrueFalseENUM";
import {Label} from "@/components/ui/label/label";
import {inputStyle} from "@/components/ui/input/style";
import useSelectItem from "@/components/ui/select-item/hook/useSelectItem";
import {CargoService} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo-service";
import {DepartamentoService} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento-service";
import {
    TipoContratoService
} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato-service";
import {
    CargaHorariaService
} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria-service";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/ColaboradorCargo";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Tooltip} from "@/components/ui/tooltip/Tooltip";

const colaboradorService = new ColaboradorService();
const cidadeService = new CidadeService();
const viaCepServie = new ViaCepService();
const cargoService = new CargoService();
const departamentoService = new DepartamentoService();
const tipoContratoService = new TipoContratoService();
const cargaHorariaService = new CargaHorariaService();

export function ColaboradorAdmissaoInicio() {
    const route = useRouter();

    const [listaColaboradores, setListaColaboradores] = useState<Colaborador[]>([]);
    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());
    const [colaboradorCargo, setColaboradorCargo] = useState<ColaboradorCargo>(new ColaboradorCargo());
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [dataAdmissao, setDataAdmissao] = useState<Date>(new Date());
    const [quantidadeDiasExperiencia, setQuantidadeDiasExperiencia] = useState<number>();
    const [dataAdmissaoExperiencia, setDataAdmissaoExperiencia] = useState<Date>();

    const [quantidadeDiasProrrogacao, setQuantidadeDiasProrrogacao] = useState<number>();
    const [dataAdmissaoProrrogacao, setDataAdmissaoProrrogacao] = useState<Date>();

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

    const onChangeDataAdmissao = useCallback((data: Date) => {
        setDataAdmissao(data);
    }, [])

    useEffect(() => {
        const quantidadeDiasExperienciaAdmissao = get(colaboradorCargo, 'quantidadeDiasExperiencia');
        const dataExperienciaAdmissao = get(colaboradorCargo, 'dataExperiencia');
        const quantidadeDiasProrrogacaoAdmissao = get(colaboradorCargo, 'quantidadeDiasProrrogacao');
        const dataProrrogacaoAdmissao = get(colaboradorCargo, 'dataProrrogacao');

        if (quantidadeDiasExperienciaAdmissao) setQuantidadeDiasExperiencia(quantidadeDiasExperienciaAdmissao);
        if (dataExperienciaAdmissao) setDataAdmissaoExperiencia(dataExperienciaAdmissao);
        if (quantidadeDiasProrrogacaoAdmissao) setQuantidadeDiasProrrogacao(quantidadeDiasProrrogacaoAdmissao);
        if (dataProrrogacaoAdmissao) setDataAdmissaoProrrogacao(dataProrrogacaoAdmissao);
    }, [colaboradorCargo]);

    const configCidadeNascimento: InputSearchConfig<Cidade, CidadeService> = {
        service: cidadeService,
        funcaoListagem: 'buscarPorNomeParecido',
        fieldLabel: 'nome',
        fieldValue: 'id'
    }

    const configCidadeEndereco: InputSearchConfig<Cidade, CidadeService> = {
        service: cidadeService,
        funcaoListagem: 'buscarPorNomeParecido',
        fieldLabel: 'nome',
        fieldValue: 'id'
    }

    const {selectItens: selectItensCargos} = useSelectItem({
        service: cargoService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

    const {selectItens: selectItensDepartamentos} = useSelectItem({
        service: departamentoService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

    const {selectItens: selectItensTiposDeContrato} = useSelectItem({
        service: tipoContratoService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

    const {selectItens: selectItensCargaHoraria} = useSelectItem({
        service: cargaHorariaService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

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

    function onBlurCep() {
        const cepColaborador = colaborador.colaboradorEndereco.cep;
        if (cepColaborador) {
            viaCepServie.getEndereco(cepColaborador).then(result => {
                if (result) {
                    setColaborador({...colaborador, colaboradorEndereco: {
                        ...colaborador.colaboradorEndereco,
                            rua: result.logradouro,
                            bairro: result.bairro,
                            complemento: result.complemento,
                            cidade: result.cidade
                        }})
                }
            })
        }
    }

    const onSelectItemCargo = (item: TSelectItem | null) => {
        if (item) {
            const cargoSelecionado = new Cargo();
            cargoSelecionado.id = item.value as string;
            set(colaboradorCargo, 'cargo', cargoSelecionado)
        } else {
            set(colaboradorCargo, 'cargo', null)
        }
    }

    const onSelectItemDepartamento = (item: TSelectItem | null) => {
        if (item) {
            const departamentoSelecionado = new Cargo();
            departamentoSelecionado.id = item.value as string;
            set(colaboradorCargo, 'departamento', departamentoSelecionado)
        } else {
            set(colaboradorCargo, 'departamento', null)
        }
    }

    const onSelectItemTipoContrato = (item: TSelectItem | null) => {
        if (item) {
            const tipoContratoSelecionado = new TipoContrato();
            tipoContratoSelecionado.id = item.value as string;
            set(colaboradorCargo, 'tipoContrato', tipoContratoSelecionado)
        } else {
            set(colaboradorCargo, 'tipoContrato', null)
        }
    }

    const onSelectItemCargaHoraria = (item: TSelectItem | null) => {
        if (item) {
            const cargaHorariaSelecionada = new TipoContrato();
            cargaHorariaSelecionada.id = item.value as string;
            set(colaboradorCargo, 'cargaHoraria', cargaHorariaSelecionada)
        } else {
            set(colaboradorCargo, 'cargaHoraria', null)
        }
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
                <Form onSubmit={onSubmit}
                      className={`h-full`}>
                    <div className={`flex gap-2 p-2 bg-base-200 rounded-lg h-full`}>
                        <div className={`flex flex-col px-3 pb-6 pt-3 gap-4 w-fit h-fit bg-base-100 rounded-[1.5rem] shadow-md`}>
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

                            <label className={`italic flex justify-center`}>{colaborador.nomeCompleto}</label>

                            <ButtonGroup>
                                <Tooltip label={`Salvar`}>
                                    <Button icone={icones.save} buttonStyle={`info`}/>
                                </Tooltip>

                                <Tooltip label={`Editar`}>
                                    <Button icone={icones.edit} buttonStyle={`warning`}/>
                                </Tooltip>

                                <Tooltip label={`Ativar`}>
                                    <Button icone={icones.check} buttonStyle={`success`}/>
                                </Tooltip>

                                <Tooltip label={`Inativar`}>
                                    <Button icone={icones.x} buttonStyle={`error`}/>
                                </Tooltip>
                            </ButtonGroup>
                        </div>

                        <div className={`w-full overflow-y-scroll pb-10`}>
                            <Fieldset label={`Dados Pessoais`} largura={`w-full`} className={`bg-base-100 shadow-md`}>
                                <LineContent>
                                    <InputString
                                        name={'matricula'}
                                        className={`w-16`}
                                        label={`Matricula`}
                                        entidade={colaborador}
                                        disabled={true}
                                        atributo={`matricula`}
                                    />

                                    <InputString
                                        name={'nomecompleto'}
                                        label={`Nome`}
                                        entidade={colaborador}
                                        atributo={`nomeCompleto`}
                                        required={true}
                                    />

                                    <InputString
                                        label={`Mãe`}
                                        name={'nomeMae'}
                                        entidade={colaborador}
                                        atributo={`nomeMae`}
                                        required={true}
                                    />

                                    <InputString
                                        label={`Pai`}
                                        name={'nomePai'}
                                        entidade={colaborador}
                                        atributo={`nomePai`}
                                    />
                                </LineContent>
                                <LineContent>
                                    <InputCPF
                                        name={'cpf'}
                                        label={`CPF`}
                                        atributo={`cpf`}
                                        entidade={colaborador}
                                    />

                                    <InputString
                                        className={`w-24`}
                                        label={`RG`}
                                        name={'rg'}
                                        atributo={`rg`}
                                        entidade={colaborador}
                                    />

                                    <InputDataCompleta
                                        name={'dataExpedicaoRg'}
                                        label={`Data de Expedição`}
                                        atributo={`dataExpedicaoRg`}
                                        entidade={colaborador}
                                    />

                                    <InputString
                                        className={`w-32`}
                                        name={'pis'}
                                        label={`PIS`}
                                        atributo={`pis`}
                                        entidade={colaborador}
                                    />

                                    <InputTelefone
                                        label={`Telefone`}
                                        tabIndex={0}
                                        name={'rg'}
                                        atributo={`rg`}
                                        entidade={colaborador}
                                    />

                                    <InputString
                                        label={`Email`}
                                        name={'email'}
                                        atributo={`email`}
                                        type={'email' }
                                        entidade={colaborador}
                                    />

                                </LineContent>
                                <LineContent>
                                    <SelectItem
                                        label={`Raça/Cor`}
                                        tabIndex={0}
                                        entidade={colaborador}
                                        fieldValor={'etnia'}
                                        values={EtniaFactory.getSelectItens()}/>

                                    <InputDataCompleta
                                        name={'dataExpedicaoRg'}
                                        label={`Data de Nascimento`}
                                        atributo={`dataExpedicaoRg`}
                                        entidade={colaborador}
                                    />

                                    <InputSearch
                                        label={`Cidade Nascimento`}
                                        entidade={colaborador}
                                        atributo={'cidadeNascimento'}
                                        config={configCidadeNascimento}/>

                                    <SelectItem
                                        tabIndex={0}
                                        label={`Gênero`}
                                        entidade={colaborador}
                                        fieldValor={'genero'}
                                        values={GeneroFactory.getSelectItens()}/>

                                    <SelectItem
                                        label={`Estado Civíl`}
                                        entidade={colaborador}
                                        fieldValor={'estadoCivil'}
                                        values={EstadoCivilFactory.getSelectItens()}/>

                                </LineContent>
                            </Fieldset>

                            <Fieldset label={`Endereço`} largura={`w-full`} className={`bg-base-100 shadow-md`}>
                                <LineContent>
                                    <InputString
                                        name={'cep'}
                                        label={'CEP'}
                                        entidade={colaborador}
                                        atributo={'colaboradorEndereco.cep'}
                                        onBlur={onBlurCep}
                                    />

                                    <InputString
                                        label={'Rua'}
                                        name={'rua'}
                                        entidade={colaborador}
                                        atributo={'colaboradorEndereco.rua'}
                                    />

                                    <InputString
                                        label={'Complemento'}
                                        name={'complemento'}
                                        entidade={colaborador}
                                        atributo={'colaboradorEndereco.complemento'}
                                    />

                                    <InputString
                                        name={'numero'}
                                        label={`Numero`}
                                        entidade={colaborador}
                                        atributo={`colaboradorEndereco.numero`}
                                    />

                                    <InputString
                                        name={'bairro'}
                                        label={`Bairro`}
                                        entidade={colaborador}
                                        atributo={`colaboradorEndereco.bairro`}
                                    />

                                    <InputSearch
                                        label={`Cidade`}
                                        entidade={colaborador}
                                        atributo={`colaboradorEndereco.cidade`}
                                        config={configCidadeEndereco}/>

                                </LineContent>
                            </Fieldset>

                            <Fieldset label={`Dados Admissão`} largura={`w-full`} className={`bg-base-100 shadow-md`}>
                                <LineContent>
                                    <SelectItem
                                        entidade={colaboradorCargo}
                                        fieldValor={'cargo.id'}
                                        label={`Cargo`}
                                        required={true}
                                        values={selectItensCargos}
                                        onSelect={onSelectItemCargo}/>

                                    <SelectItem
                                        entidade={colaboradorCargo}
                                        fieldValor={'departamento.id'}
                                        required={true}
                                        label={`Departamento`}
                                        values={selectItensDepartamentos}
                                        onSelect={onSelectItemDepartamento}/>

                                    <SelectItem
                                        entidade={colaboradorCargo}
                                        fieldValor={'tipoContrato.id'}
                                        label={`Tipo de Admissão`}
                                        values={selectItensTiposDeContrato}
                                        onSelect={onSelectItemTipoContrato}/>
                                </LineContent>
                                <LineContent>
                                    <SelectItem
                                        entidade={colaboradorCargo}
                                        fieldValor={'cargaHoraria.id'}
                                        label={`Carga Horária`}
                                        values={selectItensCargaHoraria}
                                        onSelect={onSelectItemCargaHoraria}/>

                                    <InputMoeda
                                        label={`Salário`}
                                        entidade={colaboradorCargo}
                                        atributo={'salario'}/>

                                    <SelectItem
                                        label={`Tipo de Salário`}
                                        entidade={colaboradorCargo}
                                        fieldValor={'tipoSalario'}
                                        values={TipoSalarioFactory.getSelectItens()}/>
                                </LineContent>

                                <LineContent>
                                    <SelectItem
                                        label={`Forma de Pagamento`}
                                        entidade={colaboradorCargo}
                                        fieldValor={'formaPagamento'}
                                        values={FormaPagamentoFactory.getSelectItens()}/>

                                    <SelectItem
                                        label={`Sindicato`}
                                        entidade={colaboradorCargo}
                                        fieldValor={'possuiSindicato'}
                                        values={TrueFalseFactory.getSelectItens()}/>

                                    <InputDataCompleta
                                        label={`Data de Admissão`}
                                        atributo={`dataAdmissao`}
                                        onChangeDate={onChangeDataAdmissao}
                                        entidade={colaboradorCargo}
                                    />
                                </LineContent>

                                <LineContent>
                                    <Fieldset label={`Experiência`} largura={`w-full`}>
                                        <LineContent>
                                            <Label title={`Prazo Experiência (dias)`}>
                                                <input
                                                    className={inputStyle}
                                                    type={`number`}
                                                    value={quantidadeDiasExperiencia}
                                                    onChange={(e) => setQuantidadeDiasExperiencia(parseInt(e.target.value))}/>
                                                <div
                                                    className={`flex rounded-lg p-3 items-center w-full justify-between text-sm bg-base-300 text-base-content`}>
                                                    <div className={`flex gap-3`}>
                                                        <label><strong>Experiência até:</strong></label>
                                                        <label>{`${quantidadeDiasExperiencia && dataAdmissaoExperiencia ? formatDateBR(dataAdmissaoExperiencia) : '---/---/---'}`}</label>
                                                    </div>
                                                </div>
                                            </Label>

                                        </LineContent>
                                    </Fieldset>

                                    <Fieldset label={`Prorrogação`} largura={`w-full`}>
                                        <LineContent>
                                            <Label title={`Prazo Prorrogação (dias)`}>
                                                <input
                                                    className={inputStyle}
                                                    type={`number`}
                                                    value={quantidadeDiasProrrogacao}
                                                    onChange={(e) => setQuantidadeDiasProrrogacao(parseInt(e.target.value))}/>
                                                <div
                                                    className={`flex rounded-lg p-3 items-center w-full justify-between text-sm bg-base-300 text-base-content`}>
                                                    <div className={`flex gap-3`}>
                                                        <label><strong>Prorrogado até:</strong></label>
                                                        <label>{`${quantidadeDiasProrrogacao && dataAdmissaoProrrogacao ? formatDateBR(dataAdmissaoProrrogacao) : '---/---/---'}`}</label>
                                                    </div>
                                                </div>
                                            </Label>
                                        </LineContent>
                                    </Fieldset>
                                </LineContent>
                            </Fieldset>
                        </div>
                    </div>
                    {/*<div className={`flex flex-col gap-2 h-full`}>*/}

                    {/*    <div>*/}
                    {/*        <label*/}
                    {/*            className={`text-[15pt] font-semibold text-neutral-600`}>{colaborador.nomeCompleto}</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<ButtonGroup>*/}
                    {/*    <Button*/}
                    {/*        type={`submit`}*/}
                    {/*        buttonSize={`md`}*/}
                    {/*    >Salvar</Button>*/}
                    {/*</ButtonGroup>*/}
                </Form>
            </Modal>
        </>
    )
}