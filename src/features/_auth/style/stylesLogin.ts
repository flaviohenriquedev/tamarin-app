import t from 'tailwind-styled-components';

export const LoginPagina = t.div`
    flex
    items-center
    justify-center
    min-h-screen
    bg-system
`

export const LoginContainer = t.div`
    bg-base-100
    border-2
    border-white
    rounded-lg
    p-15
    backdrop-blor-md
    shadow-lg
`

export const LoginFormulario = t.form`
    flex
    flex-col
    gap-8
    w-96
`

export const LoginFormularioCabecalho = t.div`
    flex
    items-center
    justify-between
`

type PropsLoginLabel = { classNameFont: string }
export const LoginLabel = t.label<PropsLoginLabel>`
    ${(p) => (p.classNameFont && p.classNameFont)}
    text-semibold
    text-[24pt]
`

export const LoginLogoSistema = t.div`
     flex
     items-center
     justify-center
     gap-3
     text-center
     p-4
     text-[15pt]
     font-semibold
`

export const LoginCamposForumario = t.div`
     flex
     flex-col
     gap-2
`