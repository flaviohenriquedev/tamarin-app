import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {InputCPF} from "@/components/ui/input/input-cpf";
import {InputDataCompleta} from "@/components/ui/input/input-data-completa";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/cidade-service";
import {useEffect, useState} from "react";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {set} from "lodash";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/cidade";
import {SelectItem} from "@/components/ui/select-item/select-item";

type Props = {
    admissao: Admissao;
}

const cidadeService = new CidadeService()

export function CamposFormularioDadosBasicos({admissao}: Props) {

    const [selectItensCidades, setSelectItensCidades] = useState<TSelectItem[]>([]);

    useEffect(() => {
        const selectItens: TSelectItem[] = [];
        cidadeService.listar().then(result => {
            result.map(cidade => {
                const item: TSelectItem = {
                    label: cidade.nome,
                    value: cidade.id as string
                }
                selectItens.push(item)
            })
            setSelectItensCidades(selectItens)
        })
    }, [])

    const onSelectItemCidade = (item: TSelectItem) => {
        const cidadeSelecionada = new Cidade();
        cidadeSelecionada.id = item.value as string;
        set(admissao, 'cidade', cidadeSelecionada)
    }

    return (
        <>
            <Fieldset label={`Dados Pessoais`} largura={`w-full`}>
                <LineContent>
                    <InputString
                        name={'nomecompleto'}
                        label={`Nome Completo`}
                        entidade={admissao}
                        atributo={`nomeCompleto`}
                        />
                    <InputCPF
                        name={'cpf'}
                        label={`CPF`}
                        atributo={`cpf`}
                        entidade={admissao}
                        />
                    <InputDataCompleta
                        name={'datanascimento'}
                        label={`Data de Nascimento`}
                        atributo={`dataNascimento`}
                        entidade={admissao}
                        />
                </LineContent>
                <LineContent>
                    <InputString
                        name={'nascionalidade'}
                        label={`Nascionalidade`}
                        atributo={`nascionalidade`}
                        entidade={admissao}/>
                    <InputString
                        name={'nomemae'}
                        label={`Nome da Mãe`}
                        atributo={`nomeMae`}
                        entidade={admissao}/>
                </LineContent>
            </Fieldset>

            <Fieldset label={`Endereço`} largura={`w-full`}>
                <LineContent>
                    <InputString
                        name={'rua'}
                        label={`Rua`}
                        entidade={admissao}
                        atributo={`rua`}
                        />

                    <InputString
                        name={'quadra'}
                        label={`Quadra`}
                        entidade={admissao}
                        atributo={`quadra`}
                        />

                    <InputString
                        name={'lote'}
                        label={`Lote`}
                        entidade={admissao}
                        atributo={`lote`}
                        />
                </LineContent>
                <LineContent>
                    <InputString
                        name={'numero'}
                        label={`Numero`}
                        entidade={admissao}
                        atributo={`numero`}
                        />

                    <InputString
                        name={'bairro'}
                        label={`Bairro`}
                        entidade={admissao}
                        atributo={`bairro`}
                        />

                    <SelectItem
                        label={`Cidade`}
                        values={selectItensCidades}
                        onSelect={onSelectItemCidade}/>
                </LineContent>
            </Fieldset>
        </>
    )
}