'use client'

import React, {FormEvent} from 'react';
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import {InputString} from "@/components/ui/input/InputString";
import {Button} from "@/components/ui/button/Button";
import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {RequestAuth} from "@/features/_auth/ts/request-auth";
import {Inter} from "next/font/google";
import Link from "next/link";
import LogoSistema from "@/features/sistema/logo-sistema";
import {
    LoginCamposForumario,
    LoginContainer,
    LoginFormulario,
    LoginFormularioCabecalho,
    LoginLabel,
    LoginLogoSistema
} from './style/stylesLogin'

const fontLogin = Inter({
    subsets: ['latin'],
    weight: ['500'], // ou outros pesos que tu for usar
});

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
        <LoginContainer>
            <LoginFormulario onSubmit={handleSubmit}>

                <LoginFormularioCabecalho>
                    <LoginLabel classNameFont={fontLogin.className}>Login</LoginLabel>
                    <LoginLogoSistema>
                        <LogoSistema width={100} height={50}/>
                    </LoginLogoSistema>
                </LoginFormularioCabecalho>

                <LoginCamposForumario>
                    <LineContentFill>
                        <InputString label={`Email`}
                                     entidade={autenticacao}
                                     atributo={`email`}
                                     name={`email`}
                                     type={"email"}/>
                    </LineContentFill>

                    <LineContentFill>
                        <InputString label={`Senha`}
                                     entidade={autenticacao}
                                     atributo={`senha`}
                                     name={`senha`}
                                     type={`password`}/>
                    </LineContentFill>

                    <LineContentFill justifyContent={`end`}>
                        <Link href={``}
                              className={`
                                  relative
                                  p-1
                                  text-sm
                                  text-indigo-600
                                  before:content-['']
                                  before:absolute
                                  before:bottom-0
                                  before:left-1/2
                                  before:w-0
                                  before:h-[1px]
                                  before:bg-indigo-600
                                  before:transition-all
                                  before:duration-300
                                  before:ease-in-out
                                  hover:before:left-0
                                  hover:before:w-full
                                `}>
                              <span>
                                Esqueci minha senha!
                              </span>
                        </Link>
                    </LineContentFill>

                </LoginCamposForumario>

                <Button buttonSize={`md`} type={'submit'}>Entrar</Button>

            </LoginFormulario>
        </LoginContainer>
    );
}
