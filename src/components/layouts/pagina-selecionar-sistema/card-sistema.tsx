import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import {SistemaType} from "@/features/sistema/types";
import {useRouter} from "next/navigation";
import {SistemaENUM, SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {rotasSistema} from "@/features/sistema/rotas-sistema";

type Props = {
    sistema: SistemaENUM
}

export function CardSistema({sistema}: Props) {

    const [infosSistema, setInfosSistema] = useState<SistemaType>()

    const router = useRouter();

    useEffect(() => {
        const rotasSistemaEncontradas = rotasSistema.find(rs => rs.sistema === sistema);
        setInfosSistema(rotasSistemaEncontradas)
    }, [sistema])

    function handleNavigate(infoSistema: SistemaType) {
        localStorage.setItem("sistemaSelecionado", infoSistema.sistema)
        router.push(infoSistema.href)
    }

    return (
        <>
            {infosSistema && (
                <motion.div
                    onClick={() => handleNavigate(infosSistema)}
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
                                    hover:text-indigo-400
                                `}
                >
                    {infosSistema.icone}
                    <span>{SistemaENUMFactory.getDescricao(infosSistema.sistema)}</span>
                </motion.div>
            )}
        </>
    )
}