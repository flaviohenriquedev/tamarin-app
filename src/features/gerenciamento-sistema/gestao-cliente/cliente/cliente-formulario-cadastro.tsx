import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/input-string";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {useEffect, useState} from "react";
import {rotasSistema} from "@/features/sistema/rotas";
import {DualListbox} from "@/components/ui/dual-listbox/dual-listbox";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {SistemaType} from "@/features/sistema/types";

type Props = {
    entidade: Cliente;
}

export function ClienteFormularioCadastro({entidade}: Props) {

    const [listaSistema] = useState<SistemaType[]>(rotasSistema);
    const [selectItemSistema, setSelectItemSistema] = useState<TSelectItem[]>([]);

    useEffect(() => {
        setSelectItemSistema(getSelectItemSistema())
    }, [listaSistema]);

    function getSelectItemSistema(): TSelectItem[] {
        const itens: TSelectItem[] = []
        if (listaSistema && listaSistema.length > 0) {
            listaSistema.map(sistema => {
                itens.push({
                    label: sistema.sistema.label,
                    value: sistema.sistema.key,
                })
            })
        }
        return itens;
    }

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
                    <InputString
                        entidade={entidade}
                        atributo={`dataAbertura`}/>
                </Label>
            </LineContentFill>
            <DualListbox
                entidade={entidade}
                listaValores={selectItemSistema}
                atributo={`sistemas`} />
        </>
    )
}