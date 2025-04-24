'use client'

import {
    StatusColaborador,
    StatusColaboradorFactory
} from "@/features/recursos-humanos/colaborador/ts/status-colaborador";
import {useState} from "react";
import {IoClose} from "react-icons/io5";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

type CargoType = {
    profissao: string,
    departamento: string,
    dataAdmissao: string,
}

class Colaborador {
    key: string;
    nome: string;
    status: StatusColaborador;
    cargo: CargoType;
    fotoPerfil: string;
}

const colaboradores: Colaborador[] = [
    {
        key: Math.random().toString(36),
        nome: 'Flavio Henrique Moreira Rosa',
        status: StatusColaborador.ATIVO,
        cargo: {
            profissao: "Programador",
            departamento: "T.I.",
            dataAdmissao: "01/01/2020"
        },
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Ludmilla Fernanda Gomes',
        status: StatusColaborador.ATIVO,
        cargo: {
            profissao: "Gerente de R.H.",
            departamento: "Recursos Humanos",
            dataAdmissao: "01/03/2020"
        },
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/3@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Maria Abadia de Sousa',
        status: StatusColaborador.FERIAS,
        cargo: {
            profissao: "Recepcionista",
            departamento: "Recepção",
            dataAdmissao: "10/05/2019"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/108.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'João Pedro Carvalho',
        status: StatusColaborador.AFASTADO,
        cargo: {
            profissao: "Analista de Sistemas",
            departamento: "T.I.",
            dataAdmissao: "15/08/2021"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/92.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Amanda Silva Costa',
        status: StatusColaborador.ATIVO,
        cargo: {
            profissao: "Designer Gráfico",
            departamento: "Marketing",
            dataAdmissao: "02/11/2022"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/125.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Carlos Eduardo Martins',
        status: StatusColaborador.DESLIGADO,
        cargo: {
            profissao: "Auxiliar de Logística",
            departamento: "Logística",
            dataAdmissao: "20/02/2018"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/80.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Patrícia Oliveira Mendes',
        status: StatusColaborador.FERIAS,
        cargo: {
            profissao: "Coordenadora Financeira",
            departamento: "Financeiro",
            dataAdmissao: "03/06/2017"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/95.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Rafael Nunes Batista',
        status: StatusColaborador.ATIVO,
        cargo: {
            profissao: "Técnico de Suporte",
            departamento: "T.I.",
            dataAdmissao: "12/09/2023"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/91.jpg'
    }
] as const;


export function ColaboradorPaginaInicial() {

    const [colaborador, setColaborador] = useState<Colaborador>(new Colaborador())

    const painelVariants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 100,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 25,
            },
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: {
                duration: 0.2
            }
        }
    };

    function renderColaborador() {
        return colaboradores.map((colaborador) => {
            return (
                <tr key={colaborador.key} onDoubleClick={() => setColaborador(colaborador)}>
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
                    <motion.div
                        key="painel-info"
                        id="info"
                        variants={painelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`
                                    absolute
                                    top-0
                                    right-0
                                    h-full
                                    min-w-[30rem]
                                    max-w-[30rem]
                                    px-4 py-3
                                    border-l
                                    border-t
                                    rounded-tl-md
                                    border-[#363636]
                                    bg-[#17181A]
                                    z-10
                                    shadow-[0px_0_30px_rgba(0,0,0,0.4)]
                                  `}
                    >
                        <div
                            className="flex w-full justify-end"
                            onClick={() => setColaborador(new Colaborador())}
                        >
                            <IoClose/>
                        </div>
                        <div className={`flex gap-2`}>
                            <div className={`
                                relative w-30 h-30 border-3 rounded-md ${StatusColaboradorFactory.getInfo(colaborador.status).borderColor}
                            `}>
                                <Image
                                    src={colaborador.fotoPerfil}
                                    alt="foto"
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                            <div className={`flex flex-col justify-between`}>
                                <div className={`flex h-fit gap-1`}>
                                    <span className={`text-[9pt] font-semibold`}>CPF:</span>
                                    <span className={`text-[9pt] font-light`}>034.210.261-30</span>
                                </div>

                                <div className={`flex h-fit gap-1`}>
                                    <span className={`text-[9pt] font-semibold`}>RH:</span>
                                    <span className={`text-[9pt] font-light`}>5426-703</span>
                                </div>

                                <div className={`flex h-fit gap-1`}>
                                    <span className={`text-[9pt] font-semibold`}>Data admissão:</span>
                                    <span className={`text-[9pt] font-light`}>{colaborador.cargo.dataAdmissao}</span>
                                </div>
                                <div className={`
                                                text-[10pt]
                                                font-semibold
                                                rounded-sm
                                                w-fit
                                                px-2
                                                items-center
                                                flex h-fit gap-1
                                                ${StatusColaboradorFactory.getInfo(colaborador.status).bg}
                                                `}>
                                    {StatusColaboradorFactory.getLabel(colaborador.status)}:
                                    <span>14/02/1999</span>
                                </div>
                            </div>
                        </div>

                        <div className={`py-6`}>
                            <span className={`font-bold text-[15pt]`}>{colaborador.nome}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
