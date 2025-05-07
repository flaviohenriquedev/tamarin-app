import {RadioGroup} from "@/components/ui/radio-group/radio-group";
import {SistemaType} from "@/features/sistema/types";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

type Props = {
    sistema: SistemaType
    onSelect: (sistema: SistemaType) => void
    valuesRadioGroup: TSelectItem[]
    destacar?: boolean
}

export function PermissoesItemSistema({ sistema, onSelect, valuesRadioGroup, destacar = false }: Props) {

    const [sistemaChecked, setSistemaChecked] = useState<boolean>(false)

    return (
        <li key={sistema.sistema.label}>
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

                >{sistema.sistema.label}</label>
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
                    <RadioGroup values={valuesRadioGroup}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    )
}