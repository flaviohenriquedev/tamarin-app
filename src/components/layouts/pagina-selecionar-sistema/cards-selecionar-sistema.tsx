import {motion} from "framer-motion";
import {CardCliente} from "@/components/layouts/pagina-selecionar-sistema/card-cliente";
import {CardSistema} from "@/components/layouts/pagina-selecionar-sistema/card-sistema";
import React, {useContext, useEffect, useState} from "react";
import {SistemaType} from "@/features/sistema/types";
import {EmpresaContext} from "@/context/empresa-context";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";
import {useDadosSistemas} from "@/features/sistema/useDadosSistemas";

type Props = {
    className?: string;
}

export function CardsSelecionarSistema({className}: Props) {
    const dadosSistemas = useDadosSistemas();

    const {empresa, setEmpresa} = useContext(EmpresaContext)
    const {empresasUsuarioLogado, sistemasEnumUsuarioLogado} = useUsuarioLogado();

    const [listaSistemas, setListaSistemas] = useState<SistemaType[]>([]);

    useEffect(() => {
        const sistemas = empresa.sistemas.map(es => es.keySistema);
        setListaSistemas(dadosSistemas.filter(rs => sistemas.includes(rs.sistema)))
    }, [empresa, sistemasEnumUsuarioLogado]);

    return (
        <div className={`${className} flex justify-center w-full`}>
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
                    {empresasUsuarioLogado && empresasUsuarioLogado.map(cl => (
                        <CardCliente key={cl.id}
                                     cliente={cl}
                                     destacar={cl.id === empresa.id}
                                     listarSistemas={setEmpresa}/>
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