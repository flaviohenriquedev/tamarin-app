import {TabType} from "@/components/ui/tab/ts/TabType";
import {TabGroup} from "@/components/ui/tab/TabGroup";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/ColaboradorEndereco";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/ColaboradorCargo";
import {Dispatch, SetStateAction} from "react";
import {
    CamposFormularioDadosBasicos
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/cadastro/components/CamposFormularioDadosBasicos";
import {
    CamposFormularioDadosAdmissao
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/cadastro/components/CamposFormularioDadosAdmissao";

type Props = {
    colaborador: Colaborador;
    colaboradorEndereco: ColaboradorEndereco;
    setColaboradorEndereco: Dispatch<SetStateAction<ColaboradorEndereco>>;
    colaboradorCargo: ColaboradorCargo;
}

export function AdmissaoTabs({colaborador, colaboradorEndereco, colaboradorCargo, setColaboradorEndereco}: Props) {
    const tabs: TabType[] = [
        {
            label: 'Dados Básicos',
            children: <CamposFormularioDadosBasicos
                colaborador={colaborador}
                colaboradorEndereco={colaboradorEndereco}
                setColaboradorEndereco={setColaboradorEndereco}/>
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