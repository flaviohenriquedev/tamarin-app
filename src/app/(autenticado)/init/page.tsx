'use client'

import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";

import {useRouter} from "next/navigation";

export default function PaginaInicial() {

    const route = useRouter();

    return (
        <div className={`flex flex-col w-full h-full justify-center items-center gap-10`}>
            <header className={`flex items-center justify-end px-5 w-full max-h-20 min-h-20 `}>
                <div className={`flex gap-2 items-center`}>
                    <div className={'font-light'}>
                        Bem vindo, Flávio.
                    </div>
                    <div className={`
                    flex
                    items-center
                    justify-center
                    text-white
                    text-xl
                    font-bold
                    w-12
                    h-12
                    rounded-full 
                    border border-white`}>
                        FH
                    </div>
                </div>

            </header>

            <div className={`flex items-center justify-center w-full h-full gap-4`}>
                <div className="flex flex-col w-80 h-80 bg-white text-[#2d3250]  rounded-lg p-5 gap-4">
                    <div><IoSettingsSharp size={50}/></div>
                    <div className="text-[25pt] font-bold leading-tight">
                        Gerenciamento do Sistema
                    </div>

                    <div>Acesse as configurações gerais do sistema.</div>
                    <button className="w-fit mt-auto ml-auto"
                            onClick={() => route.push("/adm")}>
                        Acessar
                    </button>
                </div>

                <div className="flex flex-col w-80 h-80 bg-white text-[#2d3250]  rounded-lg p-5 gap-4">
                    <div><HiUsers size={50}/></div>
                    <div className="text-[25pt] font-bold leading-tight">
                        Recursos Humanos
                    </div>

                    <div>Gerencie colaboradores, folhas de pagamento e mais.</div>
                    <button className="w-fit mt-auto ml-auto"
                            onClick={() => route.push("/rh")}>
                        Acessar
                    </button>
                </div>
            </div>
        </div>
    )
}