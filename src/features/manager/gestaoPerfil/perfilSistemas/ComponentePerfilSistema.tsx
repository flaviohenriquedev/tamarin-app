import {Fieldset} from "@/components/ui/fieldset/fieldset";
import React, {useCallback, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    className: string;
    sistemas: PerfilSistema[];
    selecionarSistema: (perfilSistema: PerfilSistema) => void;
}

export function ComponentePerfilSistema({
                                            className,
                                            sistemas,
                                            selecionarSistema
                                        }: Props) {

    const [sistemaSelecionado, setSistemaSelecionado] = useState<PerfilSistema>(new PerfilSistema())

    const selectSistema = useCallback((perfilSistema: PerfilSistema) => {
        setSistemaSelecionado(perfilSistema)
        selecionarSistema(perfilSistema)
    }, [selecionarSistema])

    return (
        <Fieldset label={`Sistemas`} className={`${className} h-full`}>
            <ul className={`flex flex-col gap-1`}>
                {sistemas
                    && sistemas.length > 0
                    && sistemas.map(sistema => {
                        return (
                            <li key={sistema.id}>
                                <div className={`
                                                flex
                                                items-center
                                                gap-1
                                                cursor-default
                                                border-2
                                                rounded-sm
                                                px-2
                                                ${sistemaSelecionado.keySistema === sistema.keySistema ? `
                                                        bg-primary/15
                                                        border-primary
                                                        text-base-content
                                                   ` : 'hover:bg-base-100 border-transparent text-gray-400'}`}>
                                    <Checkbox entidade={sistema}
                                              atributo={'checked'}/>
                                    <label className={`w-full h-full p-2 `}
                                           onClick={() => selectSistema(sistema)}
                                    >{SistemaENUMFactory.getDescricao(sistema.keySistema)}</label>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </Fieldset>
    )
}