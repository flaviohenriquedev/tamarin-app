import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input/input";
import {Button} from "@/components/ui/button/button";

export function FormularioLogin() {
    return (
        <form className={'flex flex-col gap-4 w-80'}>

            <div className={`flex flex-col items-center`}>
                <Image src={"/assets/img/logo-tamarin.png"} alt={"logo"} width={50} height={50}/>
                <span className={`text-xl`}>tamar<strong>in</strong></span>
            </div>

            <Input placeholder={`Email`}/>

            <Input type={`password`} placeholder="Senha"/>
            <Button>Entrar</Button>
        </form>
    );
}
