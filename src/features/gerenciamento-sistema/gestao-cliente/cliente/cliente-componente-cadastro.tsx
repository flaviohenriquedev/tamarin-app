import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/input-string";
import {useEffect, useState} from "react";
import {DualListbox} from "@/components/ui/dual-listbox/dual-listbox";
import {DualListboxType, DualListboxValue} from "@/components/ui/dual-listbox/ts/DualListboxType";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {set} from "lodash";
import {SistemaENUM, SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {InputDataCompleta} from "@/components/ui/input/input-data-completa";

type Props = {
    entidade: Cliente;
}

export function ClienteComponenteCadastro({entidade}: Props) {

    const [sistemasSelecionados, setSistemasSelecionados] = useState<DualListboxValue[]>([]);
    const [listaSistemaDualList, setListaSistemaDualList] = useState<DualListboxType[]>([]);

    useEffect(() => {
        setListaSistemaDualList(
            rotasSistema.map(item => ({
                label: SistemaENUMFactory.getLabel(item.sistema),
                value: item.sistema
            }))
        );
    }, []);

    useEffect(() => {
        const sistemas: ClienteSistema[] = []
        sistemasSelecionados.map(item => {
            if (item) {
                if (item && Object.values(SistemaENUM).includes(item as SistemaENUM)) {
                    const clienteSistema = new ClienteSistema();
                    clienteSistema.keySistema = item as SistemaENUM;
                    sistemas.push(clienteSistema);
                }
            }
        })
        set(entidade, 'sistemas', sistemas);
    }, [entidade, sistemasSelecionados]);

    return (
        <>
            <LineContentFill>
                <Label title={`Nome Fantasia`}>
                    <InputString
                        entidade={entidade}
                        atributo={`nomeFantasia`}/>
                </Label>
                <Label title={`Razão Social`}>
                    <InputString
                        entidade={entidade}
                        atributo={`razaoSocial`}/>
                </Label>
            </LineContentFill>

            <LineContentFill>
                <Label title={`CNPJ`}>
                    <InputString
                        entidade={entidade}
                        atributo={`cnpj`}/>
                </Label>
                <Label title={`Data de Abertura`}>
                    <InputDataCompleta
                        entidade={entidade}
                        atributo={`dataAbertura`}/>
                </Label>
            </LineContentFill>

            <DualListbox
                valores={listaSistemaDualList}
                stateRetorno={{
                    value: sistemasSelecionados,
                    funcSet: setSistemasSelecionados
                }}
            />
        </>
    )
}