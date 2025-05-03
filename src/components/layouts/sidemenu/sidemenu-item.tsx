import {TRoute} from "@/types/TRoute";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {IoIosArrowDown} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";

type Props = {
    rota: TRoute
}

export function SidemenuItem({rota}: Props) {
    const [openList, setOpenList] = useState<boolean>(false)
    const route = useRouter();
    const path = usePathname()

    function handleClick(rota: TRoute) {
        if (rota.href) {
            return route.push(rota.href);
        }
        return setOpenList(!openList);
    }

    function renderSubItem(subRotas: TRoute[]) {
        return subRotas.map(rota => {
            return (
                <li key={rota.title}
                    className={`flex items-center h-6 px-3 gap-4 text-[9pt] font-semibold cursor-default text-gray-500 rounded-md`}
                    onClick={() => handleClick(rota)}>
                    <div className={`relative flex items-center ml-[.1rem] border-l min-h-full border-gray-500`}>
                    </div>
                    <Link prefetch={true} className={`cursor-default ${rota.href === path ? 'text-primary' : ''} hover:text-base-content p-1 w-full border-md`} href={rota.href!}>{rota.title}</Link>
                </li>
            )
        })
    }

    return (
        <li
            className={`text-[10pt] font-light p-1`}
            key={rota.title}
        >
            <div
                className={`
                    flex
                    h-full
                    py-1 px-2
                    items-center
                    justify-between
                    cursor-default
                    font-semibold
                    ${(openList || path === rota.href) ? 'bg-base-200 text-base-content' : 'text-gray-500'}
                    rounded-md hover:bg-base-200`}
                onClick={() => handleClick(rota)}
            >
                <div
                    className={`flex items-center gap-3 min-w-0 overflow-hidden whitespace-nowrap text-ellipsis`}
                >
                    {rota.icon && <div className={`${(openList || path === rota.href) ? 'text-primary' : ''}`}>{rota.icon}</div>}
                    <span className="truncate">{rota.title}</span>
                </div>

                {rota.subRoute && (
                    <div
                        className={`
                                      flex
                                      items-center
                                      rounded-full
                                      arrow-rota-menu
                                      w-fit
                                      transition-transform
                                      duration-300
                                      ${openList ? 'rotate-180' : ''}
                                    `}
                    >
                        <IoIosArrowDown />
                    </div>
                )}
            </div>

            <AnimatePresence initial={false}>
                {rota.subRoute && openList && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderSubItem(rota.subRoute)}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>

    )
}