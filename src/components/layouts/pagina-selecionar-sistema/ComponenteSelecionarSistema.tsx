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
import {CardsSelecionarSistema} from "@/components/layouts/pagina-selecionar-sistema/cards/CardsSelecionarSistema";
import {sistemasModulosMaster} from "@/features/sistema/sistemasModulos";
import {
    SelecionarSistemaBotoes,
    SelecionarSistemaCabecalho,
    SelecionarSistemaCards,
    SelecionarSistemaContainer,
    SelecionarSistemaFrase,
    SelecionarSistemaLabel,
    SelecionarSistemaPagina
} from './style/stylePaginaSelecionarSistema'

const fonteNomeUsuario = Poppins({
    subsets: ['latin'],
    weight: ['200', '700'],
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
        <SelecionarSistemaPagina>
            <SelecionarSistemaContainer>
                {usuarioLogado && (
                    <>
                        <SelecionarSistemaCabecalho>
                            <motion.label
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, ease: 'easeOut'}}
                                className={`flex flex-col ${fonteNomeUsuario.className}`}
                            >
                                <SelecionarSistemaLabel>
                                    Olá, <span className={`text-primary`}>{nomeUsuario}</span>. {saudacao}
                                </SelecionarSistemaLabel>

                                <SelecionarSistemaFrase>{`"${frase}"`}</SelecionarSistemaFrase>
                            </motion.label>

                            <SelecionarSistemaBotoes>
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
                            </SelecionarSistemaBotoes>
                        </SelecionarSistemaCabecalho>

                        <SelecionarSistemaCards>
                            <CardsSelecionarSistema/>
                        </SelecionarSistemaCards>
                    </>
                )}
            </SelecionarSistemaContainer>
        </SelecionarSistemaPagina>
    )
}
