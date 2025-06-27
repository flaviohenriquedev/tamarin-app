'use client'

import {FormularioLogin} from "@/features/_auth/FormularioLogin";
import {LoginPagina} from './style/stylesLogin'

export function ComponenteLogin() {
    return (
        <LoginPagina>
            <FormularioLogin/>
        </LoginPagina>
    )
}