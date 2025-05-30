'use client'

import React from 'react'
import {Montserrat} from "next/font/google";
import {Briefcase, Users} from "lucide-react";
import {motion} from "framer-motion";
import Image from "next/image";
import {icones} from "@/components/common/icones";
import {IoSettingsSharp} from "react-icons/io5";
import {useRouter} from "next/navigation";

const inter = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], // ou outros pesos que tu for usar
});

export default function DevPage() {

    const route = useRouter();

    return (
        <main className={`
              relative flex flex-col w-screen h-screen gap-20
              bg-gradient-to-br from-blue-200 via-violet-100 to-white
            `}>
            <header className={`flex px-4 py-2`}>
                <div className={`w-fit ml-auto px-8`}>
                    <div
                        className={`relative flex bg-white rounded-full pl-2 pr-8 gap-2 text-neutral-400 items-center justify-start h-8`}>
                        <div className={'flex justify-center h-full items-end flex-col font-semibold'}>
                            <span className={`text-[8pt]`}>Flavio H. M. Rosa</span>
                        </div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 dropdown">
                            <div
                                className="avatar w-fit h-fit rounded-full shadow-[-34px_-13px_17px_-25px_rgba(0,_0,_0,_0.1)]"
                                tabIndex={0} role="button">
                                <div className="w-10 h-10 rounded-full">
                                    <Image width={20}
                                           height={20}
                                           alt={`avatar`}
                                           src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"/>
                                </div>
                            </div>
                            <ul tabIndex={0}
                                className="flex flex-col text-xs gap-2 dropdown-content cursor-default p-3 menu bg-base-100 rounded-box z-1 w-52 shadow-sm">
                                <li onClick={() => null}><span
                                    className={`cursor-default flex items-center`}>{icones.config} Configurações</span>
                                </li>
                                <hr className={`border-base-content/30`}/>
                                <li onClick={() => null}><span
                                    className={`cursor-default flex items-center`}>{icones.logout} Logout</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div id={`content`} className={`flex flex-col h-full items-center gap-4 `}>
                <div className={`flex flex-col gap-10`}>
                    <label className={`text-neutral-400 font-light text-[30pt] ${inter.className}`}>
                        Olá, Flavio.
                    </label>

                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut'
                        }}
                        className={`flex gap-4 p-10 rounded-xl bg-white/30 backdrop-blur-sm border border-white`}
                    >
                        <motion.div
                            onClick={() => route.push("/dev/pagina-inicial")}
                            initial={{opacity: 0, scale: 0.9, filter: 'blur(10px)'}}
                            animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
                            transition={{
                                duration: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.1
                            }}
                            whileHover={{scale: 1.05}}
                            className={`
                                    bg-white
                                    text-[15pt]
                                    flex flex-col
                                    justify-center
                                    gap-2 
                                    text-neutral-400
                                    w-[20rem]
                                    h-[10rem]
                                    cursor-pointer
                                    font-normal
                                    px-5
                                    py-8
                                    rounded-lg
                                    shadow-[-6px_8px_47px_-25px_rgba(0,_0,_0,_0.1)]
                                    transition-colors
                                    duration-200
                                    hover:text-orange-300
                                `}
                        >
                            <Users size={25}/>
                            <span>Recursos Humanos</span>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.9, filter: 'blur(10px)'}}
                            animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
                            transition={{
                                duration: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.1
                            }}
                            whileHover={{scale: 1.05}}
                            className={`
                                    bg-white
                                    text-[15pt]
                                    flex flex-col
                                    justify-center
                                    gap-2 
                                    text-neutral-400
                                    w-[20rem]
                                    h-[10rem]
                                    cursor-pointer
                                    font-normal
                                    px-5
                                    py-8
                                    rounded-lg
                                    shadow-[-6px_8px_47px_-25px_rgba(0,_0,_0,_0.1)]
                                    transition-colors
                                    duration-200
                                    hover:text-violet-300
                                `}
                        >
                            <Briefcase size={25}/>
                            <span>Departamento Pessoal</span>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.9, filter: 'blur(10px)'}}
                            animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
                            transition={{
                                duration: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.1
                            }}
                            whileHover={{scale: 1.05}}
                            className={`
                                    bg-white
                                    text-[15pt]
                                    flex flex-col
                                    justify-center
                                    gap-2 
                                    text-neutral-400
                                    w-[20rem]
                                    h-[10rem]
                                    cursor-pointer
                                    font-normal
                                    px-5
                                    py-8
                                    rounded-lg
                                    shadow-[-6px_8px_47px_-25px_rgba(0,_0,_0,_0.1)]
                                    transition-colors
                                    duration-200
                                    hover:text-blue-300
                                `}
                        >
                            <IoSettingsSharp size={25}/>
                            <span>Administração</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </main>
    )

}
