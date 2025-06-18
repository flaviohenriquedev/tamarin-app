import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputCPF} from "@/components/ui/input/InputCPF";
import {InputString} from "@/components/ui/input/InputString";
import {useState} from "react";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {ColaboradorService} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/ColaboradorService";
import {set} from "lodash";

type Props<E> = {
    entidade: E;
    atributo: string;
}

const colaboradorService = new ColaboradorService();
type TipoBusca = 'CPF' | 'MATRICULA';

export function BuscaColaborador<E>({entidade, atributo}: Props<E>) {

    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador());

    const handleEmailBlur = async (tipoBusca: TipoBusca) => {
        if (tipoBusca === 'MATRICULA') {
            if (!colaborador.matricula) return;
            colaboradorService.buscarPorMatricula(colaborador.matricula).then(result => {
                if(result && result.id) {
                    setColaborador(result);
                    if (entidade) set(entidade, atributo, result)
                }
                return;
            });
        }
        if (tipoBusca === 'CPF') {
            if (!colaborador.cpf) return;
            colaboradorService.buscarPorCpf(colaborador.cpf).then(result => {
                if(result && result.id) {
                    setColaborador(result)
                    if (entidade) set(entidade, atributo, result)
                }
                return;
            });
        }
    };

    return (
        <Fieldset label={`Colaborador`}>
            <LineContent>
                <InputString
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
                    className={`min-w-72`}
                    disabled={true}
                    entidade={colaborador}
                    atributo={`nomeCompleto`}/>
            </LineContent>
        </Fieldset>
    )
}