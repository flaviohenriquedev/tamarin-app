type Value = string | number | undefined | null;

export interface SelectItem {
    label?: string;
    value: Value;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
}
