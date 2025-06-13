'use client'

import {
    StatusColaboradorFactory
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/status-colaborador-e-n-u-m";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import {ColaboradorInfo} from "@/features/recursos-humanos/gestao-colaborador/colaborador/colaborador-info";
import Image from "next/image";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/colaborador-service";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/colaborador";

const colaboradorService = new ColaboradorService();

export function ColaboradorPaginaInicial() {

    const [listaColaboradoresAtivos, setListaColaboradoresAtivos] = useState<Colaborador[]>([]);
    const [colaboradorSelecionado, setColaboradorSelecionado] = useState<Colaborador>(new Colaborador())

    useEffect(() => {
        colaboradorService.listarColaboradoresAtivos().then(result => {
            setListaColaboradoresAtivos(result);
        })
    }, [])

    function renderColaborador() {
        return listaColaboradoresAtivos.map((colaborador) => {
            return (
                <tr key={colaborador.id}
                    className={`bg-base-100 ${colaborador === colaboradorSelecionado ? 'bg-base-200 text-base-content' : 'hover:bg-base-300'}`}
                    onDoubleClick={() => setColaboradorSelecionado(colaborador)}>
                    <th className={`text-center`}>
                        <label>
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <Image
                                        width={20}
                                        height={20}
                                        src={'https://img.daisyui.com/images/profile/demo/2@94.webp'}
                                        alt="Avatar Tailwind CSS Component"/>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-1'}>
                                <div>{colaborador.nomeCompleto}</div>
                                <div className={`
                                    text-[8pt]
                                    font-light
                                    rounded-sm
                                    w-fit
                                    px-2
                                    ${StatusColaboradorFactory.getInfo(colaborador.statusColaborador).bg}
                                `}>
                                    {StatusColaboradorFactory.getLabel(colaborador.statusColaborador)}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {colaborador.cargoAtivo.cargo.descricao}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{colaborador.cargoAtivo.departamento.descricao}</span>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className={`relative flex flex-col w-full items-between`}>
                <div id={`tabela`}
                     className={`
                                    overflow-y-auto
                                    h-screen
                                    scrollbar-thumb-base-300
                                    scrollbar-track-transparent
                                    scrollbar-thin
                                    pb-50
                                `}>
                    <table className="table table-pin-rows">
                        <thead>
                        <tr>
                            <th className={`text-center`}>
                                <label>
                                    <input type="checkbox" className="checkbox"/>
                                </label>
                            </th>
                            <th>Nome</th>
                            <th>Cargo</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderColaborador()}
                        </tbody>
                    </table>
                </div>
                <AnimatePresence>
                    {colaboradorSelecionado.nomeCompleto && (
                        <ColaboradorInfo
                            colaborador={colaboradorSelecionado}
                            setColaborador={setColaboradorSelecionado}/>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}
