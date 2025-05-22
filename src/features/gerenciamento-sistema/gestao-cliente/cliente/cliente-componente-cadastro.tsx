import {InputString} from "@/components/ui/input/input-string";
import {useEffect, useState} from "react";
import {DualListbox} from "@/components/ui/dual-listbox/dual-listbox";
import {DualListboxType, DualListboxValue} from "@/components/ui/dual-listbox/ts/DualListboxType";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {InputDataCompleta} from "@/components/ui/input/input-data-completa";
import {InputCNPJ} from "@/components/ui/input/input-cnpj";
import {LineContent} from "@/components/ui/line-content/line-content";
import {Fieldset} from "@/components/ui/fieldset/fieldset";

type Props = {
    entidade: Cliente;
}

export function ClienteComponenteCadastro({entidade}: Props) {

    const [sistemasSelecionados, setSistemasSelecionados] = useState<DualListboxValue[]>([]);
    const [listaSistemaDualList, setListaSistemaDualList] = useState<DualListboxType[]>([]);
    const [listaSistemaClienteDualList, setListaSistemaClienteDualList] = useState<DualListboxType[]>([]);

    useEffect(() => {
        setListaSistemaDualList(
            rotasSistema.map(item => ({
                label: SistemaENUMFactory.getLabel(item.sistema),
                value: item.sistema
            }))
        );
    }, []);

    useEffect(() => {
        const lista: DualListboxType[] = [];
        if (entidade.sistemas?.length > 0) {
            console.log('DENTRO DOS SISTEMAS DA ENTIDADE ->', entidade.sistemas);
            entidade.sistemas.map(sistema => {
                lista.push({
                    label: SistemaENUMFactory.getLabel(sistema.keySistema),
                    value: sistema.keySistema,
                })
                console.log('LISTA PUSHEADA', lista)
            })
        }
        setListaSistemaClienteDualList(lista);
    }, [entidade]);

    return (
        <div className="grid grid-cols-[2fr_1fr] gap-4">
            <div className={`flex flex-col gap-4`}>
                <Fieldset label={`Dados Básicos`}>
                    <LineContent>

                        <InputString
                            label={`Nome Fantasia`}
                            entidade={entidade}
                            atributo={`nomeFantasia`}
                            required/>

                        <InputString
                            label={`Razão Social`}
                            entidade={entidade}
                            atributo={`razaoSocial`}
                            required/>

                        <InputCNPJ
                            label={`CNPJ`}
                            entidade={entidade}
                            atributo={`cnpj`}
                            required/>

                        <InputDataCompleta
                            label={`Data de Abertura`}
                            entidade={entidade}
                            atributo={`dataAbertura`}
                            required/>

                    </LineContent>

                    <LineContent>

                        <InputString
                            label={'Inscrição Estadual'}
                            entidade={entidade}
                            atributo={`inscricaoEstadual`}/>

                        <InputString
                            label={'Inscrição Municipal'}
                            entidade={entidade}
                            atributo={`inscricaoMunicipal`}/>

                        <InputString
                            label={`Telefone`}
                            entidade={entidade}
                            atributo={`telefone`}/>

                        <InputString
                            label={`Email`}
                            entidade={entidade}
                            atributo={`email`}/>

                    </LineContent>
                </Fieldset>
                <Fieldset label={`Localização`}>
                    <LineContent>

                        <InputString
                            label={'Logradouro'}
                            entidade={entidade}
                            atributo={`logradouro`}/>

                        <InputString
                            label={'Número'}
                            entidade={entidade}
                            atributo={`numero`}/>

                        <InputString
                            label={`Complemento`}
                            entidade={entidade}
                            atributo={`complemento`}/>

                        <InputString
                            label={'Bairro'}
                            entidade={entidade}
                            atributo={`bairro`}/>

                    </LineContent>

                    <LineContent>

                        <InputString
                            label={'Cidade'}
                            entidade={entidade}
                            atributo={`cidade`}/>

                        <InputString
                            label={'UF'}
                            entidade={entidade}
                            atributo={`uf`}/>

                        <InputString
                            label={'CEP'}
                            entidade={entidade}
                            atributo={`cep`}/>

                    </LineContent>
                </Fieldset>
            </div>
            <Fieldset label={`Sistemas`}>
                <DualListbox
                    listaA={listaSistemaDualList}
                    listaB={listaSistemaClienteDualList}
                    stateRetorno={{
                        value: sistemasSelecionados,
                        funcSet: setSistemasSelecionados
                    }}
                />
            </Fieldset>
        </div>
    )
}