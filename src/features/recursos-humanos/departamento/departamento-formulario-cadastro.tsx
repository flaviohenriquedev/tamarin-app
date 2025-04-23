import {LabelContainer} from "@/componentes/ui/data-display/label-container/label-container";
import {InputString} from "@/componentes/ui/data-input/input/input-string";
import {LineContent} from "@/componentes/ui/data-display/line-content/line-content";
import {Colaborador} from "@/sistema/recursos-humanos/modulos/colaborador/ts/colaborador";
import {LineContentFill} from "@/componentes/ui/data-display/line-content/line-content-fill";
import {Cliente} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente";
import {Departamento} from "@/sistema/recursos-humanos/modulos/departamento/ts/departamento";

type Props = {
    entidade: Departamento;
}

export function DepartamentoFormularioCadastro({entidade}: Props) {
    return (
        <>
            <LineContentFill>
                <LabelContainer descricao={`Descrição`}>
                    <InputString
                        entidade={entidade}
                        placeholder={`Descrição`}
                        atributo={`descricao`}/>
                </LabelContainer>
            </LineContentFill>
        </>
    )
}
