import React, {InputHTMLAttributes, useCallback, useEffect, useState} from "react"
import {inputStyle} from "@/components/ui/input/style";
import {Asterisk} from "lucide-react";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import {InputSearchConfig} from "@/components/ui/input/inpustSearch/useInputSearch";
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {CrudService} from "@/services/CrudService";
import {get, set} from "lodash";

interface Props<EntidadeForm, EntidadeBusca extends EntidadePadrao, Service extends CrudService<EntidadeBusca>> extends InputHTMLAttributes<HTMLInputElement> {
    entidade?: EntidadeForm;
    atributo?: string;
    label?: string;
    className?: string;
    widthClass?: string;
    config: InputSearchConfig<EntidadeBusca, Service>
}

export function InputSearch<EntidadeForm, EntidadeBusca extends EntidadePadrao, Service extends CrudService<EntidadeBusca>>({
                                                                                                                                id,
                                                                                                                                placeholder,
                                                                                                                                name,
                                                                                                                                maxLength,
                                                                                                                                type,
                                                                                                                                autoComplete,
                                                                                                                                disabled,
                                                                                                                                onBlur,
                                                                                                                                onKeyDown,
                                                                                                                                required,
                                                                                                                                label,
                                                                                                                                className,
                                                                                                                                widthClass,
                                                                                                                                entidade,
                                                                                                                                atributo,
                                                                                                                                config
                                                                                                                            }: Props<EntidadeForm, EntidadeBusca, Service>) {

    const [listaValores, setListaValores] = useState<EntidadeBusca[]>([]);
    const [valorInput, setValorInput] = useState<string>('');
    const [valorDeBusca, setValorDeBusca] = useState<string>('')
    const [debouncedInputValue, setDebouncedInputValue] = useState("")

    useEffect(() => {
        if (entidade && atributo) {
            const valorEntidade = get(entidade, atributo);
            if (valorEntidade) {
                setValorInput(get(valorEntidade, config.fieldLabel))
            }    
        }
    }, [atributo, config.fieldLabel, entidade]);

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(valorDeBusca);
        }, 500)
        return () => clearTimeout(delayInputTimeoutId);
    }, [valorDeBusca]);

    useEffect(() => {
        const func = config.service[config.funcaoListagem];
        if (typeof func !== 'function') {
            throw new Error(`Função ${config.funcaoListagem as string} não existe no service informado`);
        }
        const funcaoListagem = func.bind(config.service) as (v: string) => Promise<EntidadeBusca[]>;

        if (funcaoListagem && debouncedInputValue) {
            const fetchData = async () => {
                await funcaoListagem(debouncedInputValue).then(result => {
                    setListaValores(result);
                });
            };
            void fetchData();
        }

    }, [config.fieldLabel, config.fieldValue, config.funcaoListagem, config.service, debouncedInputValue]);

    const onChange = useCallback((valor: string) => {
        setValorDeBusca(valor);
        setValorInput(valor); // atualiza o estado do input
        if (!valor || valor.length <= 0) {
            setListaValores([])
        }
    }, [])

    const onSelect = (etb: EntidadeBusca) => {
        setValorInput(get(etb, config.fieldLabel));
        setValorDeBusca('');
        if (entidade && atributo) set(entidade, atributo, etb);
        setListaValores([]);
    }

    const classesContainer = clsx(
        'flex flex-col gap-1',
        !/w-/.test(className ?? '') && 'flex-1'
    )

    const classesInput = clsx(
        inputStyle,
        !/w-/.test(className ?? '') && 'w-full',
        className
    )

    function getLabel(et: EntidadeBusca) {
        return get(et, config.fieldLabel)
    }

    return (
        <div className={`${classesContainer} relative`}>
            {label && (
                <label
                    htmlFor={name ? name : ''}
                    className="flex items-center font-semibold text-gray-500 gap-1 text-[9pt] pl-1">
                    {required && <span className={`text-error `}><Asterisk size={12}/></span>}
                    {label}
                </label>
            )}
            <input
                className={`${classesInput}`}
                required={required}
                id={id}
                placeholder={placeholder ? placeholder : 'Digite para buscar...'}
                name={name}
                maxLength={maxLength}
                type={type ? type : "text"}
                autoComplete={autoComplete}
                disabled={disabled}
                value={valorInput}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />

            <AnimatePresence>
                {listaValores && listaValores.length > 0 && (
                    <motion.ul
                        className={clsx(
                            `   z-50
                                    border
                                    px-3
                                    border-base-300
                                    bg-base-100
                                    text-base-content
                                    absolute
                                    left-0
                                    top-full
                                    mt-1
                                    overflow-hidden
                                    shadow-sm
                                    p-2
                                    rounded-lg
                                    text-[10pt]
                                    `,
                            widthClass ? 'truncate' : 'w-full'
                        )}
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.1, ease: "easeOut"}}
                    >
                        {listaValores && listaValores.map((et) => {
                            return <li key={et.id}
                                       className={`
                                                    px-3
                                                    py-2
                                                    transition-all
                                                    duration-200
                                                    hover:cursor-default
                                                    hover:bg-primary
                                                    hover:font-semibold
                                                    hover:text-primary-content
                                                    rounded-lg`}
                                       onClick={() => onSelect(et)}>
                                {getLabel(et)}
                            </li>
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}