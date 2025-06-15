import {CrudService} from "@/services/crud-service";
import {useEffect, useState} from "react";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {get} from "lodash";

type Props<E, S extends CrudService<E>> = {
    service: S;
    fieldValor: string;
    fieldDescricao: string;
}

const useSelectItem = <E, S extends CrudService<E>>(
    {service, fieldValor, fieldDescricao}: Props<E, S>
) => {
    const [selectItens, setSelectItens] = useState<TSelectItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await service.listar();
            const items: TSelectItem[] = result.map(e => ({
                label: get(e, fieldDescricao),
                value: get(e, fieldValor)
            }));
            setSelectItens(items);
        };

        fetchData().then();
    }, [fieldDescricao, fieldValor, service]);

    return { selectItens };
};

export default useSelectItem;
