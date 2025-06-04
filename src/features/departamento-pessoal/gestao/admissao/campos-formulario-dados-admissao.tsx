import {AdmissaoCargo} from "@/features/departamento-pessoal/gestao/admissao/admissao-cargo/ts/admissao-cargo";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {InputDataCompleta} from "@/components/ui/input/input-data-completa";

type Props = {
    admissaoCargo: AdmissaoCargo;
}

export function CamposFormularioDadosAdmissao({admissaoCargo}: Props) {
    return (
        <>
            <LineContent>
                <InputString
                    label={`Cargo`}
                    entidade={admissaoCargo}
                    atributo={`nomeCompleto`}
                    required/>
                <InputString
                    label={`Salário`}
                    atributo={`salario`}
                    entidade={admissaoCargo}
                    required/>
                <InputDataCompleta
                    label={`Data de Admissão`}
                    atributo={`dataAdmissao`}
                    entidade={admissaoCargo}
                    required/>
            </LineContent>
        </>
    )
}