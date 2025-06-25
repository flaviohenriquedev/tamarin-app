import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {EnumInfos} from "@/types/_root/EnumInfos";

export interface EnumFactory<T extends Record<string, string>> {
    enums(): T[keyof T][];
    infos(): { [K in T[keyof T]]: EnumInfos };
    getSelectItens(): TSelectItem[];
    getLabel(item: T[keyof T]): string;
}