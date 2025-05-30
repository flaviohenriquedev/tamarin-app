import {RouteType} from "@/types/_root/RouteType";

type Props = {
    subRotas: RouteType[]
};

export function SubRotas({ subRotas }: Props) {
    return (
        <ul className="px-8 py-2 text-sm text-zinc-700 space-y-1">
            {subRotas.map((subRota) => (
                <li
                    key={subRota.id}
                    className="cursor-pointer rounded-md px-3 py-2 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                >
                    {subRota.title}
                </li>
            ))}
        </ul>
    );
}
