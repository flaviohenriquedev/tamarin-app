import {RadioGroup} from "@/components/ui/radio-group/radio-group";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ClienteSistema} from "@/features/manager/gestaoCliente/clienteSistema/ts/cliente-sistema";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    clienteSistema: ClienteSistema
    perfilSistema: PerfilSistema
    onClick: (perfilSistema: PerfilSistema) => void
    valuesRadioGroup?: TSelectItem[]
    destacar?: boolean
}

export function PermissoesItemSistema({
                                          clienteSistema,
                                          perfilSistema,
                                          onClick,
                                          valuesRadioGroup,
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
                <label className={`w-full h-full p-2 `}
                       onClick={() => {
                           onClick(perfilSistema)
                       }}
                >{SistemaENUMFactory.getLabel(clienteSistema.keySistema)}</label>
            </div>
            <AnimatePresence initial={false}>
                {destacar && (
                    <motion.div
                        className={`ml-8 text-[8pt]`}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        {valuesRadioGroup && (<RadioGroup values={valuesRadioGroup}/>)}
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    )
}