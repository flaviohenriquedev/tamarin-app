import {RouteType} from "@/types/RouteType";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {IoIosArrowDown} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";

type Props = {
    rota: RouteType
}

export function SidemenuItem({rota}: Props) {
    const [openList, setOpenList] = useState<boolean>(false)
    const route = useRouter();

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
                    className={`py-2 px-3 text-[9pt] cursor-default hover:bg-[#363636] rounded-md`}>
                    {rota.title}
                </li>
            )
        })
    }

    return (
        <li className={`text-[10pt] font-light my-2 border-l-2 border-transparent hover:border-orange-600`}
            key={rota.title}>
            <div className={`flex h-full p-2 items-center justify-between cursor-default`}
                 onClick={() => handleClick(rota)}>
                <div className={`flex items-center gap-4 `}>
                    {rota.icon && rota.icon}
                    {rota.title}
                </div>
                {rota.subRoute && (
                    <div className={`
                                        flex
                                        items-center
                                        rounded-full
                                        arrow-rota-menu
                                        px-4
                                        w-fit
                                        transition-transform
                                        duration-300
                                        ${openList ? 'rotate-180' : ''}
                                        `}>
                        <IoIosArrowDown/>
                    </div>
                )}
            </div>
            <AnimatePresence initial={false}>
                {rota.subRoute && openList && (
                    <motion.ul
                        className={'pl-9'}
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