type Value = string | number | undefined | null;

export type TSelectItem = {
    label?: string;
    value: Value;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
}
