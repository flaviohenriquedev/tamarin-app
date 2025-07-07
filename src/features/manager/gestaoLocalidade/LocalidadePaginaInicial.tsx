import {LocalidadePais} from "@/features/manager/gestaoLocalidade/pais/LocalidadePais";
import {LocalidadeEstado} from "@/features/manager/gestaoLocalidade/estado/LocalidadeEstado";
import {LocalidadeCidade} from "@/features/manager/gestaoLocalidade/cidade/LocalidadeCidade";
import {TabType} from "@/components/ui/tab/ts/TabType";
import {TabGroup} from "@/components/ui/tab/TabGroup";

export function LocalidadePaginaInicial() {

    const tabs: TabType[] = [
        {
            label: 'Pais',
            children: <LocalidadePais />
        },
        {
            label: 'Estado',
            children: <LocalidadeEstado />
        },
        {
            label: 'Cidade',
            children: <LocalidadeCidade />
        },
        {
            label: 'Cidade',
            children: <LocalidadeCidade />
        }
    ]

    return (
        <TabGroup tabs={tabs} />
    )
}