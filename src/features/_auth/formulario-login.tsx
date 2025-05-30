'use client'

import React, {FormEvent} from 'react';
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import {InputString} from "@/components/ui/input/input-string";
import {Button} from "@/components/ui/button/button";
import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {RequestAuth} from "@/features/_auth/ts/request-auth";
import {Feather} from "lucide-react";

export function FormularioLogin() {
    const router = useRouter();
    const autenticacao: RequestAuth = {email: '', senha: ''};

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
        router.replace("/")
    }

    return (
        <div className={'bg-white/20 border-2 border-white rounded-lg p-30 backdrop-blor-md shadow-lg'}>
            <form className={'flex flex-col gap-5 w-96'} onSubmit={handleSubmit}>
                <div className={`flex items-center justify-center gap-3 text-neutral-900 text-center p-4 text-[30pt] font-semibold`}>
                    <Feather size={30}/>
                    <label>Arcano</label>
                </div>

                <LineContentFill>
                    <InputString entidade={autenticacao}
                                 placeholder={`Email`}
                                 atributo={`email`}
                                 name={`email`}
                                 type={"email"}/>
                </LineContentFill>

                <LineContentFill>
                    <InputString entidade={autenticacao}
                                 placeholder={`Senha`}
                                 atributo={`senha`}
                                 name={`senha`}
                                 type={`password`}/>
                </LineContentFill>

                <Button buttonSize={`md`} type={'submit'}>Entrar</Button>
            </form>
        </div>
    );
}
