import {motion} from "framer-motion";
import {CardEmpresa} from "@/components/layouts/pagina-selecionar-sistema/cards/CardEmpresa";
import React, {useCallback, useState} from "react";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuarioLogadoContext";
import {DadosAcesso} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {SistemaType} from "@/features/sistema/types";
import {CardSistema} from "@/components/layouts/pagina-selecionar-sistema/cards/CardSistema";
import {useEmpresa} from "@/context/useEmpresa";
import {sistemasModulos} from "@/features/sistema/sistemasModulos";
import {
    CardsSelecionarSistemaListaEmpresas,
    CardsSelecionarSistemaListaSistemas,
    classesCardsSelecionarSistemaContainer
} from './style/styleCardsSelecionarSistema'

export function CardsSelecionarSistema() {
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
        <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: 'easeOut'}}
            className={classesCardsSelecionarSistemaContainer()}
        >
            <CardsSelecionarSistemaListaEmpresas>
                {usuarioLogado && usuarioLogado.dadosAcesso.map(da => (
                    <CardEmpresa key={da.empresa.id}
                                 dadosAcesso={da}
                                 destacar={empresa.id === da.empresa.id}
                                 selecionarDadosAcesso={selecionarDadosAcesso}/>
                ))}
            </CardsSelecionarSistemaListaEmpresas>
            <div className="divider divider-horizontal"/>
            <CardsSelecionarSistemaListaSistemas>
                {listaSistemas && listaSistemas.map(sistema => (
                    <CardSistema key={sistema.sistema}
                                 sistema={sistema}/>
                ))}
            </CardsSelecionarSistemaListaSistemas>
        </motion.div>
    )
}