import {RouteType} from "@/types/_root/RouteType";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {IoIosArrowDown} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {Dot} from "lucide-react";

type Props = {
    rota: RouteType
}

export function SidemenuItem({rota}: Props) {
    const [openList, setOpenList] = useState<boolean>(false)
    const route = useRouter();
    const path = usePathname()

    function handleClick(rota: RouteType) {
        if (rota.href) {
            return route.push(rota.href);
        }
        return setOpenList(!openList);
    }

    function renderSubItem(subRotas: RouteType[]) {
        return subRotas.map(rota => {
            return (
                <li key={rota.title}
                    className={`flex items-center px-2 py-1 ${rota.href === path ? 'text-primary' : ''} gap-2 text-md font-semibold cursor-default text-gray-500 rounded-sm `}
                    onClick={() => handleClick(rota)}>
                    <Dot size={26}/>
                    <Link prefetch={true} className={`cursor-default hover:text-base-content w-full border-md`}
                          href={rota.href!}>{rota.title}</Link>
                </li>
            )
        })
    }

    return (
        <li
            className={`
                border-b
                border-base-300
                font-semibold
                text-sm
                `}
            key={rota.title}
        >
            <div
                className={`
                    flex
                    h-full
                    p-3
                    items-center
                    justify-between
                    cursor-default
                    hover:bg-base-200
                    ${(openList || path === rota.href) ? 'bg-base-200 text-base-content' : 'text-gray-400'}
                    font-normal`}
                onClick={() => handleClick(rota)}
            >
                <div
                    className={`flex items-center gap-3 min-w-0 overflow-hidden whitespace-nowrap text-ellipsis`}
                >
                    {rota.icon &&
                        <div className={`${(openList || path === rota.href) ? 'text-primary' : ''}`}>{rota.icon}</div>}
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
                        <IoIosArrowDown/>
                    </div>
                )}
            </div>

            <AnimatePresence initial={false}>
                {rota.subRoute && openList && (
                    <motion.ul
                        className={`bg-base-100`}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        {renderSubItem(rota.subRoute)}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>

    )
}