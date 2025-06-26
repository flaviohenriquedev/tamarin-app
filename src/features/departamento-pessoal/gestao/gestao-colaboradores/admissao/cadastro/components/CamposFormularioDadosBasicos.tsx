import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/CidadeService";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/ColaboradorEndereco";
import {Dispatch, SetStateAction} from "react";
import {EtniaFactory} from "@/features/_root/enums/EtniaENUM";
import {EstadoCivilFactory} from "@/features/_root/enums/EstadoCivilENUM";
import {GeneroFactory} from "@/features/_root/enums/GeneroENUM";
import {InputSearch} from "@/components/ui/input/inpustSearch/InputSearch";
import {ViaCepService} from "@/features/apis/viaCep/service/ViaCepService";
import {InputSearchConfig} from "@/components/ui/input/inpustSearch/useInputSearch";
import {InputTelefone} from "@/components/ui/input/InputTelefone";
import {CropImage} from "@/components/ui/crop-image/CropImage";
import {Avatar} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/Avatar";
import {set} from "lodash";
import {useCropImage} from "@/components/ui/crop-image/hook/useCropImage";

type Props = {
    colaborador: Colaborador;
    colaboradorEndereco: ColaboradorEndereco;
    setColaboradorEndereco: Dispatch<SetStateAction<ColaboradorEndereco>>;
}

const cidadeService = new CidadeService();
const viaCepServie = new ViaCepService();

export function CamposFormularioDadosBasicos({colaborador, colaboradorEndereco, setColaboradorEndereco}: Props) {

    const {
        imagem64,
        imageSrc,
        handleCrop,
        onCropComplete,
        handleFileChange
    } = useCropImage({onCrop: onSelectFotoColaborador});

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

    function onBlurCep() {
        const cepColaborador = colaboradorEndereco.cep;
        if (cepColaborador) {
            viaCepServie.getEndereco(cepColaborador).then(result => {
                if (result) {
                    setColaboradorEndereco(
                        {
                            ...colaboradorEndereco,
                            rua: result.logradouro,
                            bairro: result.bairro,
                            complemento: result.complemento,
                            cidade: result.cidade
                        }
                    )
                }
            })
        }
    }

    function onSelectFotoColaborador(valor: string) {
        set(colaborador, 'base64', valor);
    }

    return (
        <>
            <Fieldset label={`Dados Pessoais`} largura={`w-full`}>
                <div className={`flex gap-4`}>
                    <div>
                        <LineContent>
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

                            <SelectItem
                                label={`Raça/Cor`}
                                tabIndex={0}
                                entidade={colaborador}
                                fieldValor={'etnia'}
                                values={EtniaFactory.getSelectItens()}/>

                            <InputTelefone
                                label={`Telefone`}
                                tabIndex={0}
                                name={'rg'}
                                atributo={`rg`}
                                entidade={colaborador}
                            />

                            <InputString
                                label={`Email`}
                                name={'rg'}
                                atributo={`rg`}
                                entidade={colaborador}
                            />
                        </LineContent>
                        <LineContent>
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
                    </div>

                    <CropImage
                        imageSrc={imageSrc}
                        handleCrop={handleCrop}
                        onCropComplete={onCropComplete}
                        handleFileChange={handleFileChange}
                    >
                        <Avatar entidade={colaborador}
                                atributo={`base64`}
                                imagem={imagem64}
                                tamanho={`extra-grande`}/>
                    </CropImage>
                </div>
            </Fieldset>

            <Fieldset label={`Endereço`} largura={`w-full`}>
                <LineContent>
                    <InputString
                        name={'cep'}
                        label={'CEP'}
                        entidade={colaboradorEndereco}
                        atributo={'cep'}
                        onBlur={onBlurCep}
                    />

                    <InputString
                        label={'Rua'}
                        name={'rua'}
                        entidade={colaboradorEndereco}
                        atributo={'rua'}
                    />

                    <InputString
                        label={'Complemento'}
                        name={'complemento'}
                        entidade={colaboradorEndereco}
                        atributo={'complemento'}
                    />

                    <InputString
                        name={'numero'}
                        label={`Numero`}
                        entidade={colaboradorEndereco}
                        atributo={`numero`}
                    />

                    <InputString
                        name={'bairro'}
                        label={`Bairro`}
                        entidade={colaboradorEndereco}
                        atributo={`bairro`}
                    />

                    <InputSearch
                        label={`Cidade`}
                        entidade={colaboradorEndereco}
                        atributo={`cidade`}
                        config={configCidadeEndereco}/>

                </LineContent>
            </Fieldset>
        </>
    )
}