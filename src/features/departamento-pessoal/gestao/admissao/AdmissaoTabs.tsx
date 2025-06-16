import {TabType} from "@/components/ui/tab/ts/TabType";
import {TabGroup} from "@/components/ui/tab/TabGroup";
import {
    CamposFormularioDadosBasicos
} from "@/features/departamento-pessoal/gestao/admissao/CamposFormularioDadosBasicos";
import {
    CamposFormularioDadosAdmissao
} from "@/features/departamento-pessoal/gestao/admissao/CamposFormularioDadosAdmissao";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-endereco/ts/ColaboradorEndereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador-cargo/ts/ColaboradorCargo";

type Props = {
    colaborador: Colaborador;
    colaboradorEndereco: ColaboradorEndereco;
    colaboradorCargo: ColaboradorCargo;
}

export function AdmissaoTabs({colaborador, colaboradorEndereco, colaboradorCargo}: Props) {
    const tabs: TabType[] = [
        {
            label: 'Dados Básicos',
            children: <CamposFormularioDadosBasicos
                colaborador={colaborador}
                colaboradorEndereco={colaboradorEndereco}/>
        },
        {
            label: 'Dados Admissão',
            children: <CamposFormularioDadosAdmissao
                colaboradorCargo={colaboradorCargo}/>
        },
    ]

    return (
        <TabGroup
            tabs={tabs}
            classNameChildren={`min-h-[60vh] min-w-[70vw]`}/>
    )
}