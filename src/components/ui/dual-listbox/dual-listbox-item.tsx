import {ReactNode} from "react";
import {get} from "lodash";

type Props<E> = {
    item: E
    fieldLabel: string
    icon: ReactNode
    onClick: (item: E) => void
}

export function DualListboxItem<E>({item, icon, onClick, fieldLabel}: Props<E>) {
    return (
        <div>
            <li className="flex cursor-default items-center justify-between p-2 text-[9pt] flex-nowrap"
            >
                <span
                    className="block max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
                    title={get(item, fieldLabel)}>
                    {get(item, fieldLabel)}
                </span>
                <div onClick={() => onClick(item)}>
                    {icon}
                </div>
            </li>
        </div>
    )
}