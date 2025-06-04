import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {InputCPF} from "@/components/ui/input/input-cpf";
import {InputDataCompleta} from "@/components/ui/input/input-data-completa";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {AdmissaoEndereco} from "@/features/departamento-pessoal/gestao/admissao/admissao-endereco/ts/admissao-endereco";

type Props = {
    admissao: Admissao;
    admissaoEndereco: AdmissaoEndereco;
}

export function CamposFormularioDadosBasicos({admissao, admissaoEndereco}: Props) {
    return (
        <>
            <Fieldset label={`Dados Pessoais`} largura={`w-full`}>
                <LineContent>
                    <InputString
                        label={`Nome Completo`}
                        entidade={admissao}
                        atributo={`nomeCompleto`}
                        required/>
                    <InputCPF
                        label={`CPF`}
                        atributo={`cpf`}
                        entidade={admissao}
                        required/>
                    <InputDataCompleta
                        label={`Data de Nascimento`}
                        atributo={`dataNascimento`}
                        entidade={admissao}
                        required/>
                </LineContent>
                <LineContent>
                    <InputString
                        label={`Nascionalidade`}
                        atributo={`nascionalidade`}
                        entidade={admissao}/>
                    <InputString
                        label={`Nome da Mãe`}
                        atributo={`nomeMae`}
                        entidade={admissao}/>
                </LineContent>
            </Fieldset>

            <Fieldset label={`Endereço`} largura={`w-full`}>
                <LineContent>
                    <InputString
                        label={`Rua`}
                        entidade={admissaoEndereco}
                        atributo={`rua`}
                        required/>

                    <InputString
                        label={`Quadra`}
                        entidade={admissaoEndereco}
                        atributo={`quadra`}
                        required/>

                    <InputString
                        label={`Lote`}
                        entidade={admissaoEndereco}
                        atributo={`lote`}
                        required/>
                </LineContent>
                <LineContent>
                    <InputString
                        label={`Numero`}
                        entidade={admissaoEndereco}
                        atributo={`numero`}
                        required/>

                    <InputString
                        label={`Bairro`}
                        entidade={admissaoEndereco}
                        atributo={`bairro`}
                        required/>

                    <InputString
                        label={`Cidade`}
                        entidade={admissaoEndereco}
                        atributo={`cidade`}
                        required/>
                </LineContent>
            </Fieldset>
        </>
    )
}