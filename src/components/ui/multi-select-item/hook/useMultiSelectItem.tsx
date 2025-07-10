import {CrudService} from "@/services/CrudService";
import {useEffect, useState} from "react";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {get} from "lodash";
import {EntidadePadrao} from "@/class/EntidadePadrao";

export type MultiSelectItemConfig<E extends EntidadePadrao, S extends CrudService<E>> = {
    service: S;
    funcaoListagem: keyof S
    fieldLabel: string;
    fieldValue: string;
}

export default function useMultiSelectItem<E extends EntidadePadrao, S extends CrudService<E>>(config: MultiSelectItemConfig<E, S>) {
    const [listaValores, setListaValores] = useState<TSelectItem[]>([]);

    useEffect(() => {
        const func = config.service[config.funcaoListagem];
        if (typeof func !== 'function') {
            throw new Error(`Função ${config.funcaoListagem as string} não existe no service informado`);
        }
        const funcaoListagem = func.bind(config.service) as () => Promise<E[]>;
        if (funcaoListagem) {
            const fetchData = async () => {
                const result = await funcaoListagem();
                const items: TSelectItem[] = result.map(e => ({
                    value: get(e, config.fieldValue),
                    label: get(e, config.fieldLabel),
                }));
                setListaValores(items);
            };
            fetchData().then();
        }
    }, [config.fieldLabel, config.fieldValue, config.funcaoListagem, config.service]);
    return {listaValores};
};