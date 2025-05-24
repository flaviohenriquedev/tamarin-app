import {Fieldset} from "@/components/ui/fieldset/fieldset";
import React, {useCallback, useState} from "react";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";

type Props = {
    className: string;
    listaClienteSistema: ClienteSistema[];
    selecionarClienteSistema: (clienteSistema: ClienteSistema) => void;
}

export function ComponenteUsuarioSistema({
                                             className,
                                             listaClienteSistema,
                                             selecionarClienteSistema
                                         }: Props) {

    const [idClienteSistema, setIdClienteSistema] = useState<string>('')

    const selectClienteSistema = useCallback((clienteSistema: ClienteSistema) => {
        setIdClienteSistema(clienteSistema.id)
        selecionarClienteSistema(clienteSistema)
    }, [selecionarClienteSistema])

    return (
        <Fieldset label={`Sistemas`} className={`${className} h-full`}>
            <ul className={`flex flex-col gap-1`}>
                {listaClienteSistema && listaClienteSistema.length > 0 && listaClienteSistema.map(clienteSistema => {
                    return (
                        <li key={clienteSistema.id}>
                            <div className={`
                                        flex
                                        items-center
                                        gap-1
                                        cursor-default
                                        border-2
                                        rounded-md
                                        px-2
                                         ${idClienteSistema === clienteSistema.id ? `
                                                bg-primary/15
                                                border-primary
                                                text-base-content
                                           ` : 'hover:bg-base-100 border-transparent text-gray-400'}
                                        `}>
                                <label className={`w-full h-full p-2 `} onClick={() => {
                                    selectClienteSistema(clienteSistema)
                                }}>
                                    {SistemaENUMFactory.getDescricao(clienteSistema.keySistema)}
                                </label>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </Fieldset>
    )
}