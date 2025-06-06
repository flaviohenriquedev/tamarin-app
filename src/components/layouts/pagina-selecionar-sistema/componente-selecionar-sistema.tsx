'use client'

import React, {useEffect, useState} from 'react'
import {Poppins} from "next/font/google";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";
import {motion} from 'framer-motion'
import {CardSistema} from "@/components/layouts/pagina-selecionar-sistema/card-sistema";
import {LogOut, ShieldEllipsis} from "lucide-react";
import {getPrimeiroNome} from "@/utils/utils";
import {frases} from "@/components/layouts/pagina-selecionar-sistema/ts/frases";
import {saudacoes} from "@/components/layouts/pagina-selecionar-sistema/ts/saudacoes";
import {signOut} from "next-auth/react";
import {CardCliente} from "@/components/layouts/pagina-selecionar-sistema/card-cliente";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {SistemaType} from "@/features/sistema/types";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {useSistemaContext} from "@/features/sistema/sistema-context";

const fonteNomeUsuario = Poppins({
    subsets: ['latin'],
    weight: ['200', '700'], // ou outros pesos que tu for usar
});

export function ComponenteSelecionarSistema() {

    const { selecionarSistema } = useSistemaContext();

    const {usuarioLogado, clientesUsuarioLogado} = useUsuarioLogado();
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [frase, setFrase] = useState('');
    const [saudacao, setSaudacao] = useState('');
    const [listaClientesPossuemSistema, setListaClientesPossuemSistema] = useState<Cliente[]>([]);
    const [listaSistemasCliente, setListaSistemasCliente] = useState<SistemaType[]>([]);

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

    useEffect(() => {
        setListaClientesPossuemSistema(clientesUsuarioLogado.filter(cl => cl.sistemas && cl.sistemas.length > 0));
    }, [clientesUsuarioLogado]);

    async function logout() {
        await signOut({redirect: false})
    }

    function navigateToAdminSystem() {
        const sistemaAdmin = rotasSistema.find(rs => rs.sistema === SistemaENUM.GERENCIAR_SISTEMA);
        if(sistemaAdmin) selecionarSistema(sistemaAdmin, true)
    }

    function listarSistemas(cliente: Cliente) {
        const sistemas = cliente.sistemas.map(cs => cs.keySistema);
        setListaSistemasCliente(rotasSistema.filter(rs => sistemas.includes(rs.sistema)))
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
                            {/* Label com fade e slide da esquerda */}
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
                                        className="rounded-2xl bg-warning flex items-center gap-5  p-4 text-white"
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
                                    className="rounded-2xl bg-primary flex items-center gap-5  p-4 text-white"
                                >
                                    <LogOut size={30}/>
                                </motion.button>
                            </div>
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
                                    className={`flex justify-center gap-4 px-20 py-14 w-full rounded-xl bg-white/30 backdrop-blur-sm border border-white`}
                                >
                                    <ul className={`flex w-[50%] flex-col gap-2 max-h-80 overflow-y-auto p-4`}>
                                        {listaClientesPossuemSistema && listaClientesPossuemSistema.map(cliente => (
                                            <CardCliente key={cliente.id}
                                                         cliente={cliente}
                                                         listarSistemas={listarSistemas}/>
                                        ))}
                                    </ul>
                                    <ul className={`flex w-[50%] flex-col gap-2 max-h-80 overflow-y-auto p-4`}>
                                        {listaSistemasCliente && listaSistemasCliente.map(sistema => (
                                            <CardSistema key={sistema.sistema}
                                                         sistema={sistema}/>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )

}
