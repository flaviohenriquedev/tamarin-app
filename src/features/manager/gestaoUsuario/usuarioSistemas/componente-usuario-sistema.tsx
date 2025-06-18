import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import React, {useCallback, useState} from "react";
import {EmpresaSistema} from "@/features/manager/gestaoEmpresa/empresaSistema/ts/empresa-sistema";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";

type Props = {
    className: string;
    listaClienteSistema: EmpresaSistema[];
    selecionarClienteSistema: (clienteSistema: EmpresaSistema) => void;
}

export function ComponenteUsuarioSistema({
                                             className,
                                             listaClienteSistema,
                                             selecionarClienteSistema
                                         }: Props) {

    const [idClienteSistema, setIdClienteSistema] = useState<string>('')

    const selectClienteSistema = useCallback((clienteSistema: EmpresaSistema) => {
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