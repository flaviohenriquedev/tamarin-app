'use client'

import {StatusColaboradorFactory} from "@/features/recursos-humanos/colaborador/ts/status-colaborador";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {colaboradores, ColaboradorMockado} from "@/features/recursos-humanos/colaborador/ts/dados-mocados";
import {ColaboradorInfo} from "@/features/recursos-humanos/colaborador/colaborador-info";

export function ColaboradorPaginaInicial() {

    const [colaborador, setColaborador] = useState<ColaboradorMockado>(new ColaboradorMockado())

    function renderColaborador() {
        return colaboradores.map((colaborador) => {
            return (
                <tr key={colaborador.key} className={`hover:bg-[#363636]`} onDoubleClick={() => setColaborador(colaborador)}>
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
        <div id={`container-principal`}
             className={`relative flex justify-between`}>
            <div id={`tabela`}
                 className={`
                overflow-x-hidden
                overflow-y-scroll
                h-screen
                w-full
                pb-50
                scrollbar-thumb-[#363636]
                scrollbar-track-transparent
                scrollbar-thin
            `}>
                <table className="table">
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
                {colaborador.nome && (
                    <ColaboradorInfo
                        colaborador={colaborador}
                        setColaborador={setColaborador}/>
                )}
            </AnimatePresence>
        </div>
    )
}
