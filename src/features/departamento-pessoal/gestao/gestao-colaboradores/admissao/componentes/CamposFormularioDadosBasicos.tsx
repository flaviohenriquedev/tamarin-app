import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/InputString";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/CidadeService";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {set} from "lodash";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
import useSelectItem from "@/components/ui/select-item/hook/useSelectItem";
import {
    Colaborador
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/Colaborador";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/ColaboradorEndereco";
import {Dispatch, SetStateAction} from "react";
import {EtniaFactory} from "@/features/_root/enums/EtniaENUM";
import {EstadoCivilFactory} from "@/features/_root/enums/EstadoCivilENUM";
import {GeneroFactory} from "@/features/_root/enums/GeneroENUM";
import {InputSearch} from "@/components/ui/input/InputSearch";
import {ViaCepService} from "@/features/apis/viaCep/service/ViaCepService";

type Props = {
    colaborador: Colaborador;
    colaboradorEndereco: ColaboradorEndereco;
    setColaboradorEndereco: Dispatch<SetStateAction<ColaboradorEndereco>>;
}

const cidadeService = new CidadeService();
const viaCepServie = new ViaCepService();

export function CamposFormularioDadosBasicos({colaborador, colaboradorEndereco, setColaboradorEndereco}: Props) {

    const {selectItens: selectItensCidades} = useSelectItem({
        service: cidadeService,
        fieldDescricao: 'nome',
        fieldValor: 'id'
    })

    const onSelectItemCidade = (item: TSelectItem | null) => {
        if (item) {
            const cidadeSelecionada = new Cidade();
            cidadeSelecionada.id = item.value as string;
            set(colaboradorEndereco, 'cidade', cidadeSelecionada)
        }
    }

    const buscarCidadeDeNascimento = async (nome: string): Promise<Cidade[]> => {
        if (nome) return await cidadeService.buscarPorNomeParecido(nome);
        return [];
    }

    const onSelectCidadeNascimento = (item: TSelectItem) => {
        const cidade = new Cidade();
        cidade.id = item.value as string;
        set(colaborador, 'cidadeNascimento', cidade)
    }

    function onBlurCep() {
        const cepColaborador = colaboradorEndereco.cep;
        console.log('cep colaborador', cepColaborador);
        if (cepColaborador) {
            viaCepServie.getEndereco(cepColaborador).then(result => {
                if (result) {
                    setColaboradorEndereco(
                        {...colaboradorEndereco,
                            rua: result.logradouro,
                            bairro: result.bairro,
                            complemento: result.complemento}
                    )
                }
            })
        }
    }

    return (
        <>
            <Fieldset label={`Dados Pessoais`} largura={`w-full`}>
                <LineContent>
                    <InputString
                        name={'nomecompleto'}
                        label={`Nome`}
                        entidade={colaborador}
                        atributo={`nomeCompleto`}
                        required={true}
                    />

                    <InputString
                        name={'nomecompleto'}
                        label={`Mãe`}
                        entidade={colaborador}
                        atributo={`nomeCompleto`}
                        required={true}
                    />

                    <InputString
                        name={'nomecompleto'}
                        label={`Pai`}
                        entidade={colaborador}
                        atributo={`nomeCompleto`}
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
                        entidade={colaborador}
                        fieldValor={'etnia'}
                        values={EtniaFactory.getSelectItens()} />

                    <InputString
                        label={`Telefone`}
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
                        label={`Cidade de Nascimento`}
                        entidade={colaborador}
                        atributo={'cidadeNascimento'}
                        fieldValor={'id'}
                        fieldDescricao={'nome'}
                        funcaoBuscar={buscarCidadeDeNascimento}
                        onSelectItem={onSelectCidadeNascimento}
                    />

                    {/*<SelectItem*/}
                    {/*    label={`Cidade Nascimento`}*/}
                    {/*    entidade={colaborador}*/}
                    {/*    fieldValor={"cidadeNascimento.id"}*/}
                    {/*    values={selectItensCidades}*/}
                    {/*    onSelect={() => {}} />*/}

                    <SelectItem
                        label={`Gênero`}
                        entidade={colaborador}
                        fieldValor={'genero'}
                        values={GeneroFactory.getSelectItens()} />

                    <SelectItem
                        label={`Estado Civíl`}
                        entidade={colaborador}
                        fieldValor={'estadoCivil'}
                        values={EstadoCivilFactory.getSelectItens()} />

                </LineContent>
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
                        name={'rua'}
                        label={`Rua`}
                        entidade={colaboradorEndereco}
                        atributo={`rua`}
                    />

                    <InputString
                        name={'quadra'}
                        label={`Quadra`}
                        entidade={colaboradorEndereco}
                        atributo={`quadra`}
                    />

                    <InputString
                        name={'lote'}
                        label={`Lote`}
                        entidade={colaboradorEndereco}
                        atributo={`lote`}
                    />
                    <InputString
                        label={'Complemento'}
                        name={'complemento'}
                        entidade={colaboradorEndereco}
                        atributo={'complemento'}
                    />
                </LineContent>
                <LineContent>
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

                    <SelectItem
                        tabIndex={0}
                        entidade={colaboradorEndereco}
                        fieldValor={'cidade.id'}
                        label={`Cidade`}
                        values={selectItensCidades}
                        onSelect={onSelectItemCidade}/>
                </LineContent>
            </Fieldset>
        </>
    )
}