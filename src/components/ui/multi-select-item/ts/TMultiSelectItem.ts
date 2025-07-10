export type TSelectItemValue = string | number | boolean | undefined | null;
export type TMultiSelectItem = {
    label: string;
    labelWhenSelected?: string;
    value: TSelectItemValue;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
    checked?: boolean;
}
