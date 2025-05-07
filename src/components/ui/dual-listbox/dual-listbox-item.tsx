import {ReactNode} from "react";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

type Props = {
    item: TSelectItem
    icon: ReactNode
    action: (item: TSelectItem) => void
    onClick?: (item: TSelectItem) => void
    destaque?: boolean
}

export function DualListboxItem({item, icon, action, onClick, destaque = false}: Props) {
    return (
        <div>
            <li onClick={() => onClick ? onClick(item) : null}
                className={`flex cursor-default items-center justify-between p-2 text-[9pt] flex-nowrap ${destaque ? 'bg-base-100' : ''}`}
            >
                <span
                    className="block max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
                    title={item.label}>
                    {item.label}
                </span>
                <div onClick={() => action(item)}>
                    {icon}
                </div>
            </li>
        </div>
    )
}