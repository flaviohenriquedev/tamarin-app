import {TabType} from "@/components/ui/tab/ts/TabType";
import {TabGroup} from "@/components/ui/tab/tab-group";
import {
    CamposFormularioDadosBasicos
} from "@/features/departamento-pessoal/gestao/admissao/campos-formulario-dados-basicos";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {
    CamposFormularioDadosAdmissao
} from "@/features/departamento-pessoal/gestao/admissao/campos-formulario-dados-admissao";

type Props = {
    admissao: Admissao;
}

export function AdmissaoTabs({admissao}: Props) {
    const tabs: TabType[] = [
        {
            label: 'Dados Básicos',
            children: <CamposFormularioDadosBasicos
                admissao={admissao}/>
        },
        {
            label: 'Dados Admissão',
            children: <CamposFormularioDadosAdmissao
                admissao={admissao}/>
        },
    ]

    return (
        <TabGroup
            tabs={tabs}
            classNameChildren={`min-h-[60vh] min-w-[60vw]`}/>
    )
}