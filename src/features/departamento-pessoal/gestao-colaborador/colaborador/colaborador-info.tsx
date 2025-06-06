import {ColaboradorMockado} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/dados-mocados";
import {IoClose} from "react-icons/io5";
import {
    StatusColaboradorFactory
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/status-colaborador-e-n-u-m";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";


type Props = {
    colaborador: ColaboradorMockado
    setColaborador: (colaborador: ColaboradorMockado) => void
}

export function ColaboradorInfo({colaborador, setColaborador}: Props) {

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

    return (
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
                        border-base-content/10
                        bg-base-100
                        z-10
                        shadow-[0px_0_30px_rgba(0,0,0,0.4)]
                        overflow-y-scroll
                        scrollbar-thumb-[#363636]
                        scrollbar-track-transparent
                        scrollbar-thin
                        pb-50
                        `}
        >
            <div
                className="flex w-full justify-end"
                onClick={() => setColaborador(new ColaboradorMockado())}
            >
                <IoClose/>
            </div>
            <div className={`flex gap-2`}>
                <div className={`
                                relative w-30 h-30 border-3 rounded-sm ${StatusColaboradorFactory.getInfo(colaborador.status).borderColor}
                            `}>
                    <Image
                        src={colaborador.fotoPerfil}
                        alt="foto"
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <div className={`flex flex-col justify-between`}>
                    <div className={`flex h-fit gap-1`}>
                        <span className={`text-[9pt] font-semibold`}>CPF:</span>
                        <span className={`text-[9pt] font-light`}>034.210.261-30</span>
                    </div>

                    <div className={`flex h-fit gap-1`}>
                        <span className={`text-[9pt] font-semibold`}>RG:</span>
                        <span className={`text-[9pt] font-light`}>5426-703</span>
                    </div>

                    <div className={`flex h-fit gap-1`}>
                        <span className={`text-[9pt] font-semibold`}>Data de Nascimento:</span>
                        <span className={`text-[9pt] font-light`}>13/09/1999</span>
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
                        {StatusColaboradorFactory.getLabel(colaborador.status)}
                    </div>
                </div>
            </div>

            <div className={`flex flex-col py-6`}>
                <span className={`font-bold text-[15pt]`}>{colaborador.nome}</span>

                <ul className={`flex flex-col gap-4 mt-5`}>
                    <li>
                        <Link
                            prefetch={true}
                            href={''}
                            className={`font-semibold text-sm text-primary hover:underline`}>Dados Férias </Link>
                        <ul className={`pl-4`}>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data inicio: </label>
                                <span className={`font-light text-[9pt]`}>01/02/2023 </span>
                            </li>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data término: </label>
                                <span className={`font-light text-[9pt]`}>01/03/2023 </span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link prefetch={true} href={''}
                              className={`font-semibold text-sm text-primary hover:underline`}>Dados Admissão</Link>
                        <ul className={`pl-4`}>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data admissão: </label>
                                <span className={`font-light text-[9pt]`}>{colaborador.cargo.dataAdmissao}</span>
                            </li>
                            <li>
                                <label className={`font-light text-[9pt]`}>Departamento: </label>
                                <span className={`font-light text-[9pt]`}>{colaborador.cargo.departamento}</span>
                            </li>
                            <li>
                                <label className={`font-light text-[9pt]`}>Cargo: </label>
                                <span className={`font-light text-[9pt]`}>{colaborador.cargo.profissao}</span>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link prefetch={true} href={''}
                              className={`font-semibold text-sm text-primary hover:underline`}>Dados Aleatórios</Link>
                        <ul className={`pl-4`}>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data inicio: </label>
                                <span className={`font-light text-[9pt]`}>01/02/2023 </span>
                            </li>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data término: </label>
                                <span className={`font-light text-[9pt]`}>01/03/2023 </span>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link prefetch={true} href={''}
                              className={`font-semibold text-sm text-primary hover:underline`}>Dados
                            Afastamenho</Link>
                        <ul className={`pl-4`}>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data inicio: </label>
                                <span className={`font-light text-[9pt]`}>01/02/2023 </span>
                            </li>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data término: </label>
                                <span className={`font-light text-[9pt]`}>01/03/2023 </span>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link prefetch={true} href={''}
                              className={`font-semibold text-sm text-primary hover:underline`}>Dados
                            Desligamento</Link>
                        <ul className={`pl-4`}>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data inicio: </label>
                                <span className={`font-light text-[9pt]`}>01/02/2023 </span>
                            </li>
                            <li>
                                <label className={`font-light text-[9pt]`}>Data término: </label>
                                <span className={`font-light text-[9pt]`}>01/03/2023 </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}