import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {Grip} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuarioLogadoContext";
import {useEmpresa} from "@/context/useEmpresa";
import {SistemaType} from "@/features/sistema/types";
import {useRouter} from "next/navigation";
import {DadosAcesso} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {useSistemaContext} from "@/features/sistema/sistema-context";
import {sistemasModulos, sistemasModulosMaster} from "@/features/sistema/sistemasModulos";

type Props = {
    sistema?: SistemaType;
}

export function ComponenteSelecionarEmpresaSistema({sistema}: Props) {
    const router = useRouter();
    const {usuarioLogado} = useUsuarioLogado();
    const {empresa, selecionarEmpresa} = useEmpresa()
    const {limparSistemaSelecionado, sistemaSelecionado, selecionarSistema} = useSistemaContext();

    const [mostrarListaEmpresas, setMostrarListaEmpresas] = useState<boolean>(false)
    const [mostrarListaSistemas, setMostrarListaSistemas] = useState<boolean>(false)
    const [listaSistemas, setListaSistemas] = useState<SistemaType[]>([])
    const [dadosAcessoSelecionado, setDadosAcessoSelecionado] = useState<DadosAcesso>(new DadosAcesso())

    function onSelectDadosAcesso(dadosAcesso: DadosAcesso) {
        selecionarEmpresa(dadosAcesso.empresa);
        setDadosAcessoSelecionado(dadosAcesso);
        setMostrarListaEmpresas(false);
    }

    function onSelectSistema(st: SistemaType) {
        selecionarSistema(st);
        router.push(st.href)
        setMostrarListaSistemas(false);
    }

    useEffect(() => {
        if (dadosAcessoSelecionado && dadosAcessoSelecionado.sistemas && dadosAcessoSelecionado.sistemas.length > 0) {
            const enumsSistemas = dadosAcessoSelecionado.sistemas.map(ds => ds.sistema)
            const sistemasModulosFiltrados = sistemasModulos.filter(sm => enumsSistemas.includes(sm.sistema));
            const sistemasTratados = usuarioLogado.usuarioMaster ? [...sistemasModulosMaster, ...sistemasModulosFiltrados] : sistemasModulosFiltrados;
            
            if (sistemaSelecionado?.sistema  && !sistemasTratados.map(st => st.sistema).includes(sistemaSelecionado?.sistema)) {
                limparSistemaSelecionado();
            }
            
            setListaSistemas(sistemasTratados)
        }
    }, [dadosAcessoSelecionado, limparSistemaSelecionado, sistemaSelecionado?.sistema, usuarioLogado.usuarioMaster]);

    return (
        <div
            className={`flex bg-base-100 items-center rounded-lg text-sm shadow-md h-full px-3 py-2 text-base-content/60`}>

            <div className={`relative w-48`}>
                <div className={`flex items-center`}>
                    <label><strong>{`${empresa.nomeFantasia ? empresa.nomeFantasia : 'Selecione uma empresa'}`}</strong></label>
                    <button
                        className={`h-full ml-auto w-fit p-1 border-2 border-neutral-200 rounded-lg cursor-pointer transition-transform duration-200 active:scale-90`}
                        onClick={() => setMostrarListaEmpresas(!mostrarListaEmpresas)}>
                        <Grip size={16}/>
                    </button>
                </div>

                {mostrarListaEmpresas && usuarioLogado.dadosAcesso && (
                    <ul className={`absolute bg-base-100 rounded-lg z-50 border border-neutral-300 mt-2 shadow-md`}>
                        {usuarioLogado.dadosAcesso.map(da => (
                            <li key={da.empresa.id}
                                className={`
                                cursor-pointer
                                p-2
                                m-2
                                rounded-lg
                                border-2
                                truncate
                                ${empresa.id === da.empresa.id ? 'border-blue-400' : 'border-neutral-200'}
                            `}
                                onClick={() => onSelectDadosAcesso(da)}>
                                {da.empresa.nomeFantasia}
                            </li>
                        ))}
                    </ul>
                )}

            </div>
            <div className="divider divider-horizontal mx-1"/>
            <div className={`relative w-48`}>
                <div className={`flex items-center`}>
                    <label className={`cursor-pointer truncate hover:text-base-content`}>
                        {`${sistema ? SistemaENUMFactory.getDescricao(sistema.sistema) : 'Selecione um sistema.'}`}
                    </label>

                    <button
                        className={`h-full ml-auto w-fit p-1 border-2 border-neutral-200 rounded-lg cursor-pointer transition-transform duration-200 active:scale-90`}
                        onClick={() => setMostrarListaSistemas(!mostrarListaSistemas)}>
                        <Grip size={16}/>
                    </button>
                </div>

                {mostrarListaSistemas && (
                    <ul className={`absolute bg-base-100 rounded-lg z-50 border border-neutral-300 mt-2 shadow-md`}>
                        {listaSistemas.map(st => (
                            <li key={st.sistema}
                                className={`
                                cursor-pointer
                                p-2
                                m-2
                                rounded-lg
                                border-2
                                truncate
                                ${st.sistema === sistemaSelecionado?.sistema? 'border-blue-400' : 'border-neutral-200'}
                            `}
                                onClick={() => onSelectSistema(st)}>
                                {SistemaENUMFactory.getDescricao(st.sistema)}
                            </li>
                        ))}
                    </ul>
                )}

            </div>

        </div>
    )
}