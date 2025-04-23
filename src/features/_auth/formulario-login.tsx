import React from 'react';
import Image from "next/image";

export function FormularioLogin() {
    return (
        <form className={'flex flex-col gap-4'}>

            <div className={`flex flex-col items-center`}>
                <Image src={"/assets/img/logo-tamarin.png"} alt={"logo"} width={50} height={50}/>
                <span className={`text-xl`}>tamar<strong>in</strong></span>
            </div>

            <input
                className="bg-background text-foreground px-3 py-2.5 border border-foreground rounded-sm text-base transition-all duration-200 outline-none focus:border-mediumvioletred focus:ring-2 focus:ring-mediumvioletred focus:ring-opacity-40 disabled:opacity-60 disabled:cursor-not-allowed"
                placeholder="Digite algo..."/>

            <input placeholder="Digite sua senha"/>
            <button>Entrar</button>
        </form>
    );
}
