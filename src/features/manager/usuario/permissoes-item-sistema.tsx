import {RadioGroup} from "@/components/ui/radio-group/radio-group";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {set} from "lodash";
import {ListFilterPlus} from "lucide-react";

type Props = {
    sistema: ClienteSistema
    onSelect: (sistema: ClienteSistema) => void
    valuesRadioGroup?: TSelectItem[]
    destacar?: boolean
}

export function PermissoesItemSistema({ sistema, onSelect, valuesRadioGroup, destacar = false }: Props) {

    const [sistemaChecked, setSistemaChecked] = useState<boolean>(sistema.checked)

    useEffect(() => {
        set(sistema, 'checked', sistemaChecked)
    }, [sistema, sistemaChecked])

    return (
        <li key={sistema.keySistema}>
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
                <input type="checkbox"
                       checked={sistemaChecked}
                       className="cursor-default checkbox checkbox-xs"
                       onChange={() => setSistemaChecked(!sistemaChecked)}

                />
                <label className={`w-full h-full p-2 `}
                    onClick={() => {
                    onSelect(sistema)
                }}
                >{SistemaENUMFactory.getLabel(sistema.keySistema)}</label>
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