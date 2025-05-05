import {ReactNode} from "react";

type Props = {
    item: string
    icon: ReactNode
    onClick: (item: string) => void
}

export function DualListboxItem({item, icon, onClick}: Props) {
    return (
        <div>
            <li className="flex items-center justify-between p-2 text-[9pt] rounded shadow"
            >
                {item}
                <div onClick={() => onClick(item)}>
                    {icon}
                </div>
            </li>
        </div>
    )
}