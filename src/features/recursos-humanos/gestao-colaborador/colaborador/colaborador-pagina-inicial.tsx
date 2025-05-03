'use client'

import {
    StatusColaboradorFactory
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/status-colaborador";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {
    colaboradores,
    ColaboradorMockado
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/dados-mocados";
import {ColaboradorInfo} from "@/features/recursos-humanos/gestao-colaborador/colaborador/colaborador-info";

export function ColaboradorPaginaInicial() {

    const [colaboradorSelecionado, setColaboradorSelecionado] = useState<ColaboradorMockado>(new ColaboradorMockado())

    function renderColaborador() {
        return colaboradores.map((colaborador) => {
            return (
                <tr key={colaborador.key}
                    className={`${colaborador === colaboradorSelecionado ? 'bg-base-200 text-base-content' : 'hover:bg-base-300'}`}
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
                                    <img
                                        src={colaborador.fotoPerfil}
                                        alt="Avatar Tailwind CSS Component"/>
                                </div>
                            </div>
                            <div className={'flex flex-col gap-1'}>
                                <div>{colaborador.nome}</div>
                                <div className={`
                                    text-[8pt]
                                    font-light
                                    rounded-sm
                                    w-fit
                                    px-2
                                    ${StatusColaboradorFactory.getInfo(colaborador.status).bg}
                                `}>
                                    {StatusColaboradorFactory.getLabel(colaborador.status)}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {colaborador.cargo.profissao}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{colaborador.cargo.departamento}</span>
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
                    {colaboradorSelecionado.nome && (
                        <ColaboradorInfo
                            colaborador={colaboradorSelecionado}
                            setColaborador={setColaboradorSelecionado}/>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}
