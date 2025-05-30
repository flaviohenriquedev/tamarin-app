'use client'

import React, {useEffect, useState} from 'react'
import {Poppins} from "next/font/google";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";
import {motion} from 'framer-motion'
import {CardSistema} from "@/components/layouts/pagina-selecionar-sistema/card-sistema";
import {LogOut} from "lucide-react";
import {getPrimeiroNome} from "@/utils/utils";
import {frases} from "@/components/layouts/pagina-selecionar-sistema/ts/frases";
import {saudacoes} from "@/components/layouts/pagina-selecionar-sistema/ts/saudacoes";
import {signOut} from "next-auth/react";

const fonteNomeUsuario = Poppins({
    subsets: ['latin'],
    weight: ['200', '700'], // ou outros pesos que tu for usar
});

export function ComponenteSelecionarSistema() {
    const {listaSistemasPermitidos, usuarioLogado} = useUsuarioLogado();

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

    async function logout() {
        await signOut({redirect: false})
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
                    <>
                        <div className="flex items-center">
                            {/* Label com fade e slide da esquerda */}
                            <motion.label
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className={`flex flex-col ${fonteNomeUsuario.className}`}
                            >
                                <label className={`text-neutral-600 font-light text-[25pt]`}>Olá, <span className={`text-primary`}>{nomeUsuario}</span>. {saudacao}</label>
                                <label className={`text-md italic`}>{`"${frase}"`}</label>
                            </motion.label>

                            {/* Botão com animação de entrada e efeito hover animado */}
                            <motion.button
                                onClick={logout}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, backgroundColor: '#2563eb', color: '#fff' }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                className="rounded-2xl text-primary-content bg-primary flex items-center gap-5 ml-auto p-4 text-neutral-400"
                            >
                                <LogOut size={30} />
                            </motion.button>
                        </div>
                        <div className={`flex items-center justify-center w-full h-full`}>
                            <div className={`flex justify-center w-full`}>
                                <motion.div
                                    initial={{opacity: 0, y: 30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeOut'
                                    }}
                                    className={`flex gap-4 px-20 py-14 rounded-xl bg-white/30 backdrop-blur-sm border border-white`}
                                >
                                    {listaSistemasPermitidos.map(sistema => (
                                        <CardSistema key={sistema} sistema={sistema}/>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    )

}
