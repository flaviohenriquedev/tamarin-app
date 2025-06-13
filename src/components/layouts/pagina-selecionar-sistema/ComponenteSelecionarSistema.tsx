'use client'

import React, {useEffect, useState} from 'react'
import {Poppins} from "next/font/google";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuarioLogadoContext";
import {motion} from 'framer-motion'
import {LogOut, ShieldEllipsis} from "lucide-react";
import {getPrimeiroNome} from "@/utils/utils";
import {frases} from "@/components/layouts/pagina-selecionar-sistema/ts/frases";
import {saudacoes} from "@/components/layouts/pagina-selecionar-sistema/ts/saudacoes";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {useSistemaContext} from "@/features/sistema/sistema-context";
import {logout} from "@/features/sistema/functions";
import {CardsSelecionarSistema} from "@/components/layouts/pagina-selecionar-sistema/CardsSelecionarSistema";
import {sistemasModulosMaster} from "@/features/sistema/sistemasModulos";

const fonteNomeUsuario = Poppins({
    subsets: ['latin'],
    weight: ['200', '700'], // ou outros pesos que tu for usar
});

export function ComponenteSelecionarSistema() {
    const {usuarioLogado} = useUsuarioLogado();
    const {selecionarSistema} = useSistemaContext();

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [frase, setFrase] = useState('');
    const [saudacao, setSaudacao] = useState('');

    useEffect(() => {
        const randomFrase = frases[Math.floor(Math.random() * frases.length)];
        const randomSaudacao = saudacoes[Math.floor(Math.random() * saudacoes.length)];
        setSaudacao(randomSaudacao);
        setFrase(randomFrase);
    }, []);

    useEffect(() => {
        if (usuarioLogado.nome) {
            setNomeUsuario(getPrimeiroNome(usuarioLogado.nome));
        }
    }, [usuarioLogado.nome])

    function navigateToAdminSystem() {
        const sistemaAdmin = sistemasModulosMaster.find(rs => rs.sistema === SistemaENUM.GERENCIAR_SISTEMA);
        if (sistemaAdmin) selecionarSistema(sistemaAdmin, true)
    }

    return (
        <main className={`
              relative
              flex
              flex-col
              items-center
              w-screen
              h-screen
              gap-20
            `}>
            <div className={`w-[70%] h-[50%] mt-30`}>
                {usuarioLogado && (
                    <div className={`flex flex-col gap-4 w-full`}>
                        <div className="flex items-center">
                            <motion.label
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, ease: 'easeOut'}}
                                className={`flex flex-col ${fonteNomeUsuario.className}`}
                            >
                                <label className={`text-neutral-600 font-light text-[25pt]`}>Olá, <span
                                    className={`text-primary`}>{nomeUsuario}</span>. {saudacao}</label>
                                <label className={`text-md italic`}>{`"${frase}"`}</label>
                            </motion.label>

                            {/* Botão com animação de entrada e efeito hover animado */}
                            <div className={`flex items-center gap-2 ml-auto`}>
                                {usuarioLogado.usuarioMaster && (
                                    <motion.button
                                        onClick={navigateToAdminSystem}
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        whileHover={{scale: 1.05}}
                                        transition={{type: 'spring', stiffness: 200, damping: 15}}
                                        className="cursor-pointer rounded-2xl bg-warning flex items-center gap-5  p-4 text-white"
                                    >
                                        <ShieldEllipsis size={30}/>
                                    </motion.button>
                                )}

                                <motion.button
                                    onClick={logout}
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    whileHover={{scale: 1.05}}
                                    transition={{type: 'spring', stiffness: 200, damping: 15}}
                                    className="cursor-pointer rounded-2xl bg-primary flex items-center gap-5  p-4 text-white"
                                >
                                    <LogOut size={30}/>
                                </motion.button>
                            </div>
                        </div>
                        <div className={`flex items-center justify-center w-full h-full`}>
                            <CardsSelecionarSistema/>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )

}
