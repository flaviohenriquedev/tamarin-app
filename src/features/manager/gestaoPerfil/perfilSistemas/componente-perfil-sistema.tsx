import {Fieldset} from "@/components/ui/fieldset/fieldset";
import React, {useCallback, useState} from "react";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";

type Props = {
    className: string;
    listaPerfilSistema: PerfilSistema[];
    selecionarPerfilSistema: (perfilSistema: PerfilSistema) => void;
}

export function ComponentePerfilSistema({
                                            className,
                                            listaPerfilSistema,
                                            selecionarPerfilSistema
                                        }: Props) {

    const [idSelecionado, setIdSelecionado] = useState<string>('')

    const selectPerfilSistema = useCallback((perfilSistema: PerfilSistema) => {
        setIdSelecionado(perfilSistema.clienteSistema.id)
        selecionarPerfilSistema(perfilSistema)
    }, [selecionarPerfilSistema])

    return (
        <Fieldset label={`Sistemas`} className={`${className} h-full`}>
            <ul className={`flex flex-col gap-1`}>
                {listaPerfilSistema
                    && listaPerfilSistema.length > 0
                    && listaPerfilSistema.map(perfilSistema => {
                        return (
                            <li key={perfilSistema.id}>
                                <div className={`
                                                flex
                                                items-center
                                                gap-1
                                                cursor-default
                                                border-2
                                                rounded-sm
                                                px-2
                                                ${idSelecionado === perfilSistema.clienteSistema.id ? `
                                                        bg-primary/15
                                                        border-primary
                                                        text-base-content
                                                   ` : 'hover:bg-base-100 border-transparent text-gray-400'}`}>
                                    <Checkbox entidade={perfilSistema}
                                              atributo={'checked'}/>
                                    <label className={`w-full h-full p-2 `}
                                           onClick={() => selectPerfilSistema(perfilSistema)}
                                    >{SistemaENUMFactory.getDescricao(perfilSistema.clienteSistema.keySistema)}</label>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </Fieldset>
    )
}