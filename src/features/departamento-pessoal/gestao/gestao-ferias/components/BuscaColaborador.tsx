import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {InputString} from "@/components/ui/input/InputString";
import {useEffect, useState} from "react";
import {set} from "lodash";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/service/ColaboradorService";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";

type Props<E> = {
    entidade: E;
    atributo: string;
    idColaborador?: string | null;
}

const colaboradorService = new ColaboradorService();
type TipoBusca = 'CPF' | 'MATRICULA';

export function BuscaColaborador<E>({entidade, atributo, idColaborador}: Props<E>) {

    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());

    const handleEmailBlur = async (tipoBusca: TipoBusca) => {
        if (tipoBusca === 'MATRICULA') {
            if (!colaborador.matricula) return;
            colaboradorService.buscarPorMatricula(colaborador.matricula).then(result => {
                if (result && result.id) {
                    setColaborador(result);
                    if (entidade) set(entidade, atributo, result)
                }
                return;
            });
        }
        if (tipoBusca === 'CPF') {
            if (!colaborador.cpf) return;
            colaboradorService.buscarPorCpf(colaborador.cpf).then(result => {
                if (result && result.id) {
                    setColaborador(result)
                    if (entidade) set(entidade, atributo, result)
                }
                return;
            });
        }
    };

    useEffect(() => {
        if (idColaborador) {
            colaboradorService.buscarPorId(idColaborador).then(result => {
                if (result) setColaborador(result);
            })
        }
    }, [idColaborador]);

    return (
        <Fieldset label={`Colaborador`} largura={'w-[50rem]'}>
            <LineContent>
                <InputString
                    className={'w-20'}
                    label={`Mat.`}
                    entidade={colaborador}
                    atributo={'matricula'}
                    onBlur={() => handleEmailBlur('MATRICULA')}
                />
                <InputCPF
                    label={`CPF`}
                    className={`w-40`}
                    entidade={colaborador}
                    atributo={'cpf'}
                    onBlur={() => handleEmailBlur('CPF')}
                />
                <InputString
                    disabled={true}
                    entidade={colaborador}
                    atributo={`nomeCompleto`}/>
            </LineContent>
        </Fieldset>
    )
}