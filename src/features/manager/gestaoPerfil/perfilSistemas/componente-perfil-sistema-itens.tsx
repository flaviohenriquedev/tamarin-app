import React from "react";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    clienteSistema: ClienteSistema
    perfilSistema: PerfilSistema
    onClick: (perfilSistema: PerfilSistema) => void
    destacar?: boolean
}

export function ComponentePerfilSistemaItens({
                                          clienteSistema,
                                          perfilSistema,
                                          onClick,
                                          destacar = false
                                      }: Props) {
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
                    ${destacar ? `
                            bg-primary/15
                            border-primary
                            text-base-content
                       ` : 'hover:bg-base-100 border-transparent text-gray-400'}
                    `}>
                <Checkbox entidade={perfilSistema}
                          atributo={'checked'}/>
                <label className={`w-full h-full p-2 `} onClick={() => {onClick(perfilSistema)}}
                >{SistemaENUMFactory.getLabel(clienteSistema.keySistema)}</label>
            </div>
        </li>
    )
}