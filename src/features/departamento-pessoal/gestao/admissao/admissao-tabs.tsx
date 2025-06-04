import {TabType} from "@/components/ui/tab/ts/TabType";
import {TabGroup} from "@/components/ui/tab/tab-group";
import {
    CamposFormularioDadosBasicos
} from "@/features/departamento-pessoal/gestao/admissao/campos-formulario-dados-basicos";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {AdmissaoEndereco} from "@/features/departamento-pessoal/gestao/admissao/admissao-endereco/ts/admissao-endereco";
import {AdmissaoCargo} from "@/features/departamento-pessoal/gestao/admissao/admissao-cargo/ts/admissao-cargo";
import {
    CamposFormularioDadosAdmissao
} from "@/features/departamento-pessoal/gestao/admissao/campos-formulario-dados-admissao";

type Props = {
    admissao: Admissao;
    admissaoEndereco: AdmissaoEndereco;
    admissaoCargo: AdmissaoCargo;
}

export function AdmissaoTabs({admissao, admissaoEndereco, admissaoCargo}: Props) {
    const tabs: TabType[] = [
        {
            label: 'Dados Básicos',
            children: <CamposFormularioDadosBasicos
                admissao={admissao}
                admissaoEndereco={admissaoEndereco}/>
        },
        {
            label: 'Dados Admissão',
            children: <CamposFormularioDadosAdmissao
                admissaoCargo={admissaoCargo}/>
        },
    ]

    return (
        <TabGroup
            tabs={tabs}
            classNameChildren={`min-h-[60vh] min-w-[60vw]`}/>
    )
}