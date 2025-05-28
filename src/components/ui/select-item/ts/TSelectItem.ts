export type TSelectItemValue = string | number | undefined | null;
export type TSelectItem = {
    label: string;
    labelWhenSelected?: string;
    value: TSelectItemValue;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
    checked?: boolean;
}
