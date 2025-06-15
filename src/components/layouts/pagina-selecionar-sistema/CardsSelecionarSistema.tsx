import {motion} from "framer-motion";
import {CardEmpresa} from "@/components/layouts/pagina-selecionar-sistema/CardEmpresa";
import React, {useCallback, useState} from "react";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuarioLogadoContext";
import {DadosAcesso} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {SistemaType} from "@/features/sistema/types";
import {CardSistema} from "@/components/layouts/pagina-selecionar-sistema/CardSistema";
import {useEmpresa} from "@/context/useEmpresa";
import {sistemasModulos} from "@/features/sistema/sistemasModulos";

type Props = {
    className?: string;
}

export function CardsSelecionarSistema({className}: Props) {
    const {usuarioLogado} = useUsuarioLogado();

    const {empresa, selecionarEmpresa} = useEmpresa();
    const [listaSistemas, setListaSistemas] = useState<SistemaType[]>([]);

    const [dadosAcessoSelecionado, setDadosAcessoSelecionado] = useState<DadosAcesso>(new DadosAcesso())

    const selecionarDadosAcesso = useCallback((dadosAcesso: DadosAcesso) => {
        selecionarEmpresa(dadosAcesso.empresa)
        setDadosAcessoSelecionado(dadosAcesso)
        setListaSistemas(sistemasModulos.filter(sm => dadosAcesso.sistemas.map(ds => ds.sistema).includes(sm.sistema)))
    }, [selecionarEmpresa])

    return (
        <div className={`${className} flex justify-center w-full`}>
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                }}
                className={`flex justify-center gap-4 px-20 py-14 w-full rounded-xl bg-base-100/30 backdrop-blur-sm border border-white`}
            >
                <ul className={`flex w-[50%] flex-col gap-2 max-h-80 overflow-y-auto p-4`}>
                    {usuarioLogado && usuarioLogado.dadosAcesso.map(da => (
                        <CardEmpresa key={da.empresa.id}
                                     dadosAcesso={da}
                                     destacar={empresa.id === da.empresa.id}
                                     selecionarDadosAcesso={selecionarDadosAcesso}/>
                    ))}
                </ul>
                <div className="divider divider-horizontal"/>
                <ul className={`flex w-[50%] flex-col gap-2 max-h-80 overflow-y-auto p-4`}>
                    {listaSistemas && listaSistemas.map(sistema => (
                        <CardSistema key={sistema.sistema}
                                     sistema={sistema}/>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}