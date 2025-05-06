import {ReactNode} from "react";
import {get} from "lodash";

type Props<E> = {
    item: E
    fieldLabel: string
    icon: ReactNode
    action: (item: E) => void
    onClick?: (item: E) => void
    destaque?: boolean
}

export function DualListboxItem<E>({item, icon, action, onClick, fieldLabel, destaque = false}: Props<E>) {
    return (
        <div>
            <li onClick={() => onClick ? onClick(item) : null}
                className={`flex cursor-default items-center justify-between p-2 text-[9pt] flex-nowrap ${destaque ? 'bg-base-100' : ''}`}
            >
                <span
                    className="block max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
                    title={get(item, fieldLabel)}>
                    {get(item, fieldLabel)}
                </span>
                <div onClick={() => action(item)}>
                    {icon}
                </div>
            </li>
        </div>
    )
}