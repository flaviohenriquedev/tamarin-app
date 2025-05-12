import {RadioGroup} from "@/components/ui/radio-group/radio-group";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {ListFilterPlus} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    clienteSistema: ClienteSistema
    perfilSistema: PerfilSistema
    onClick: (perfilSistema: PerfilSistema) => void
    onCheck: (sistema: ClienteSistema) => void
    valuesRadioGroup?: TSelectItem[]
    destacar?: boolean
}

export function PermissoesItemSistema({ clienteSistema, perfilSistema, onClick, onCheck, valuesRadioGroup, destacar = false }: Props) {

    const [sistemaChecked, setSistemaChecked] = useState<boolean>(perfilSistema.checked)

    useEffect(() => {
        onCheck(clienteSistema)
    }, [onCheck, clienteSistema, sistemaChecked])

    useEffect(() => {
        console.log('MUDOU O CHECK ->', perfilSistema.checked)
    }, [perfilSistema.checked]);

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
                          atributo={'checked'} />
                <label className={`w-full h-full p-2 `}
                    onClick={() => {
                    onClick(perfilSistema)
                }}
                >{SistemaENUMFactory.getLabel(clienteSistema.keySistema)}</label>
                {sistemaChecked && destacar && (
                    <div className={`
                        flex
                        items-center
                        justify-center
                        p-1
                        cursor-pointer
                        rounded-md
                        border-2
                        border-transparent
                        transform
                        active:scale-95
                        hover:bg-base-100`}>
                        <ListFilterPlus size={15}/>
                    </div>
                )}

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