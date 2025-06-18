import {Fieldset} from "@/components/ui/fieldset/fieldset";
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

type Props = {
    colaborador: Colaborador;
    colaboradorEndereco: ColaboradorEndereco;
}

const cidadeService = new CidadeService()

export function CamposFormularioDadosBasicos({colaborador, colaboradorEndereco}: Props) {

    const {selectItens: selectItensCidades} = useSelectItem({
        service: cidadeService,
        fieldDescricao: 'nome',
        fieldValor: 'id'
    })

    const onSelectItemCidade = (item: TSelectItem) => {
        const cidadeSelecionada = new Cidade();
        cidadeSelecionada.id = item.value as string;
        set(colaboradorEndereco, 'cidade', cidadeSelecionada)
    }

    return (
        <>
            <Fieldset label={`Dados Pessoais`} largura={`w-full`}>
                <LineContent>
                    <InputString
                        name={'nomecompleto'}
                        label={`Nome Completo`}
                        entidade={colaborador}
                        atributo={`nomeCompleto`}
                    />
                    <InputCPF
                        name={'cpf'}
                        label={`CPF`}
                        atributo={`cpf`}
                        entidade={colaborador}
                    />
                    <InputString
                        label={`RG`}
                        name={'rg'}
                        atributo={`rg`}
                        entidade={colaborador}
                    />

                </LineContent>
                <LineContent>
                    <InputDataCompleta
                        name={'datanascimento'}
                        label={`Data de Nascimento`}
                        atributo={`dataNascimento`}
                        entidade={colaborador}
                    />
                    <InputString
                        name={'nascionalidade'}
                        label={`Nascionalidade`}
                        atributo={`nascionalidade`}
                        entidade={colaborador}/>
                    <InputString
                        name={'nomemae'}
                        label={`Nome da Mãe`}
                        atributo={`nomeMae`}
                        entidade={colaborador}/>
                </LineContent>
            </Fieldset>

            <Fieldset label={`Endereço`} largura={`w-full`}>
                <LineContent>
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