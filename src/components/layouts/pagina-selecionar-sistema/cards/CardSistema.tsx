import {motion} from "framer-motion";
import React from "react";
import {SistemaType} from "@/features/sistema/types";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {useSistemaContext} from "@/features/sistema/sistema-context";
import {
    classesCardSistema
} from "@/components/layouts/pagina-selecionar-sistema/cards/style/styleCardsSelecionarSistema";

type Props = {
    sistema: SistemaType;
}

export function CardSistema({sistema}: Props) {
    const {selecionarSistema} = useSistemaContext();

    return (
        <>
            {sistema && (
                <motion.li
                    onClick={() => selecionarSistema(sistema, true)}
                    initial={{opacity: 0, scale: 0.9, filter: 'blur(10px)'}}
                    animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
                    transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1
                    }}
                    whileHover={{scale: 1.05}}
                    className={classesCardSistema()}
                >
                    {sistema.icone}
                    <span>{SistemaENUMFactory.getDescricao(sistema.sistema)}</span>
                </motion.li>
            )}
        </>
    )
}