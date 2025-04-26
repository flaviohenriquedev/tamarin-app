'use client'

import {useState} from "react";
import {colaboradores, ColaboradorMockado} from "@/features/recursos-humanos/colaborador/ts/dados-mocados";
import {StatusColaboradorFactory} from "@/features/recursos-humanos/colaborador/ts/status-colaborador";
import {AnimatePresence} from "framer-motion";
import {ColaboradorInfo} from "@/features/recursos-humanos/colaborador/colaborador-info";

export function ColaboradorListar() {

    const [colaboradorSelecionado, setColaboradorSelecionado] = useState<ColaboradorMockado>(new ColaboradorMockado())

    function renderColaborador() {
        return colaboradores.map((colaborador) => {
            return (
                <tr key={colaborador.key} onDoubleClick={() => setColaboradorSelecionado(colaborador)}>
                    <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                            <input id="hs-table-search-checkbox-1" type="checkbox"
                                   className="border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                            <label htmlFor="hs-table-search-checkbox-1"
                                   className="sr-only">Checkbox</label>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <div className={'flex items-center gap-2'}>
                            <img className="inline-block size-11 rounded-lg"
                                 src={colaborador.fotoPerfil}
                                 alt="Avatar"/>

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
                        <span className={`text-[9pt] `}>{colaborador.cargo.departamento}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button type="button"
                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="relative flex flex-col w-full">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div
                        className="border border-gray-200 rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                        <div className="py-3 px-4">
                            <div className="relative max-w-xs">
                                <label htmlFor="hs-table-search" className="sr-only">Search</label>
                                <input type="text" name="hs-table-search" id="hs-table-search"
                                       className="py-1.5 sm:py-2 px-3 ps-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:z-10 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-primary"
                                       placeholder="Search for items"/>
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                    <svg className="size-4 text-gray-400 dark:text-neutral-500"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-700">
                                <tr>
                                    <th scope="col" className="py-3 px-4 pe-0">
                                        <div className="flex items-center h-5">
                                            <input id="hs-table-search-checkbox-all" type="checkbox"
                                                   className="border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                            <label htmlFor="hs-table-search-checkbox-all"
                                                   className="sr-only">Checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-start text-xs font-m  edium text-gray-500 uppercase dark:text-neutral-500">Nome
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Cargo
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Ações
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {renderColaborador()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {colaboradorSelecionado.nome && (
                    <ColaboradorInfo
                        colaborador={colaboradorSelecionado}
                        setColaborador={setColaboradorSelecionado}/>
                )}
            </AnimatePresence>
        </div>
    )
}