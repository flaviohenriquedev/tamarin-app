'use client'

import {
    StatusColaborador,
    StatusColaboradorFactory
} from "@/features/recursos-humanos/colaborador/ts/status-colaborador";

const colaboradores = [
    {
        key: Math.random().toString(36),
        nome: 'Flavio Henrique',
        status: StatusColaborador.ATIVO,
        cargo: {profissao: "Programador", departamento: "T.I."},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda',
        status: StatusColaborador.ATIVO,
        cargo: {profissao: "Gerente de R.H.", departamento: "Recursos Humanos"},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/3@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda',
        status: StatusColaborador.FERIAS,
        cargo: {profissao: "Programador", departamento: "T.I."},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/4@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda',
        status: StatusColaborador.AFASTADO,
        cargo: {profissao: "Programador", departamento: "T.I."},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/5@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda',
        status: StatusColaborador.DESLIGADO,
        cargo: {profissao: "Programador", departamento: "T.I."},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda',
        status: StatusColaborador.ATIVO,
        cargo: {profissao: "Programador", departamento: "T.I."},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/3@94.webp'
    }, {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda',
        status: StatusColaborador.ATIVO,
        cargo: {profissao: "Programador", departamento: "T.I."},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/4@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda',
        status: StatusColaborador.ATIVO,
        cargo: {profissao: "Programador", departamento: "T.I."},
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/5@94.webp'
    },

] as const

export function ColaboradorPaginaInicial() {

    function renderColaborador() {
        return colaboradores.map((colaborador) => {
            return (
                <tr key={colaborador.key}>
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
                    <td>Purple</td>
                    <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
            )
        })
    }

    return (
        <div id={`container-principal`}
             className={`p-2`}>
            <div className={`
                overflow-x-auto
                overflow-y-scroll
                h-screen
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
                        <th>Ações</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderColaborador()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
