import {EntidadePadrao} from "@/class/EntidadePadrao";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {useCallback, useEffect, useState} from "react";
import {get} from "lodash";
import {CrudService} from "@/services/CrudService";

export type InputSearchConfig<E extends EntidadePadrao, S extends CrudService<E>> = {
    service: S;
    funcaoListagem: keyof S
    fieldLabel: string;
    fieldValue: string;
}

export default function useInputSearch<E extends EntidadePadrao, S extends CrudService<E>>(config: InputSearchConfig<E, S>) {
    const [listaValores, setListaValores] = useState<TSelectItem[]>([]);
    const [valorInput, setValorInput] = useState<string>('');
    const [valorDeBusca, setValorDeBusca] = useState<string>('')
    const [debouncedInputValue, setDebouncedInputValue] = useState("")

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(valorInput);
        }, 500)
        return () => clearTimeout(delayInputTimeoutId);
    }, [valorDeBusca, valorInput]);

    useEffect(() => {
        const func = config.service[config.funcaoListagem];
        if (typeof func !== 'function') {
            throw new Error(`Função ${config.funcaoListagem as string} não existe no service informado`);
        }
        const funcaoListagem = func.bind(config.service) as (v: string) => Promise<E[]>;

        if (funcaoListagem) {
            const fetchData = async () => {
                const result = await funcaoListagem(debouncedInputValue);
                const items: TSelectItem[] = result.map(e => ({
                    value: get(e, config.fieldValue),
                    label: get(e, config.fieldLabel),
                }));
                setListaValores(items);
            };
            fetchData().then();
        }

    }, [config.fieldLabel, config.fieldValue, config.funcaoListagem, config.service, debouncedInputValue]);
    
    const onChange = useCallback((valor: string) => {
        setValorDeBusca(valor);
        setValorInput(valor); // atualiza o estado do input
        if (!valor || valor.length <= 0) {
            setListaValores([])
        }
    }, [])

    function onSelectItem(item: TSelectItem) {
        setValorInput(item.label)
    }

    return {onChange, valorInput, listaValores}
}