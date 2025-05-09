import {ReactNode} from "react";
import {DualListboxType} from "@/components/ui/dual-listbox/ts/DualListboxType";

type Props = {
    item: DualListboxType
    icon: ReactNode
    action: (item: DualListboxType) => void
    onClick?: (item: DualListboxType) => void
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