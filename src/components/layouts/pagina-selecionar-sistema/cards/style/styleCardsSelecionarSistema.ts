import t from 'tailwind-styled-components';

export const classesCardsSelecionarSistemaContainer = () => {
    return `
    flex
    justify-center
    gap-4
    px-20
    py-14
    w-full
    rounded-xl
    bg-base-100/30
    backdrop-blur-sm
    border
    border-white  
    `
}

export const classesCardSistema = () => {
    return `
    bg-base-100
    text-md
    flex
    items-center
    gap-4
    text-neutral-400
    w-full
    cursor-pointer
    font-normal
    p-4
    rounded-lg
    shadow-[-6px_8px_47px_-25px_rgba(0,_0,_0,_0.1)]
    transition-colors
    duration-200
    hover:text-primary
    `
}

export const CardsSelecionarSistemaListaEmpresas = t.ul`
    flex
    w-[50%]
    flex-col
    gap-2
    max-h-80
    overflow-y-auto
    p-4
`

export const CardsSelecionarSistemaListaSistemas = t.ul`
    flex
    w-[50%]
    flex-col
    gap-2
    max-h-80
    overflow-y-auto
    p-4
`