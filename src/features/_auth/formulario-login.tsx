'use client'

import React, {FormEvent} from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Autenticacao} from "@/class/Autenticacao";
import {signIn} from "next-auth/react";
import {InputString} from "@/components/ui/input/input-string";
import {Button} from "@/components/ui/button/button";


export function FormularioLogin() {
    const router = useRouter();
    const autenticacao = new Autenticacao();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const result = await signIn('credentials', {
            email: autenticacao.email,
            senha: autenticacao.senha,
            redirect: false
        })
        if (result?.error) {
            return console.log('Usuário e/ou Senha incorretos.')
        }
        router.replace("/init")
    }

    return (
        <form className={'flex flex-col gap-5 w-96'} onSubmit={handleSubmit}>

            <div className={`flex flex-col items-center pb-5`}>
                <Image src={"/assets/img/logo-tamarin.png"} alt={"logo"} width={50} height={50}/>
                <span className={`text-xl mt-1`}>tamar<strong>in</strong></span>
            </div>
            <InputString entidade={autenticacao} placeholder={`Email`} atributo={`email`} name={`email`}
                         type={"email"}/>
            <InputString entidade={autenticacao} placeholder={`Senha`} atributo={`senha`} name={`senha`}
                         type={`password`}/>

            <Button type={'submit'}>Entrar</Button>
        </form>
    );
}
