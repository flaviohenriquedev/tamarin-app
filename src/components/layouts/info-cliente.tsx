import React, {useContext, useEffect, useRef, useState} from "react";
import {ClienteContext} from "@/context/cliente-context";
import {ListTodo} from "lucide-react";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {ClienteService} from "@/features/manager/gestaoCliente/cliente/ts/cliente-service";
import {AnimatePresence, motion} from "framer-motion";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";

const clienteService = new ClienteService();

export function InfoCliente() {
    const {usuarioLogado, clientesUsuarioLogado} = useUsuarioLogado();
    const {cliente, setCliente} = useContext(ClienteContext);
    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);
    const [showList, setShowList] = useState<boolean>(false)
    const [loading, setLoading] = useState(false);
    const refContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setShowList(false);
            }
        }

        function handleClickOutside(e: MouseEvent) {
            if (refContainer.current && !refContainer.current.contains(e.target as Node)) {
                setShowList(false);
            }
        }

        if (showList) {
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showList]);

    function handleShowList() {
        setLoading(!showList)
        if (!showList) {
            if (usuarioLogado.usuarioMaster) {
                clienteService.listar().then(result => {
                    if (result) {
                        setLoading(false)
                        setListaClientes(result)
                        setShowList(true)
                    }
                });
            } else {
                setListaClientes(clientesUsuarioLogado);
                setLoading(false)
                setShowList(true)
            }

        } else {
            setShowList(false);
        }
    }

    function getClientes() {
        if (listaClientes && listaClientes.length > 0) {
            return (
                <motion.ul
                    className="absolute top-0 left-full p-2 ml-2 z-50 bg-base-100 shadow-[-5px_5px_7px_0px_rgba(0,_0,_0,_0.1)] rounded-sm mt-2"
                    initial={{x: -20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: -20, opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    {listaClientes.map(cl => (
                        <li
                            key={cliente.id}
                            onClick={() => {
                                setCliente(cl);
                                setShowList(false);
                            }}
                            className={`
                                p-2
                                border-2
                                ${cliente && cliente.id === cl.id ? `
                                        bg-primary/15
                                        border-primary
                                        text-base-content
                                    ` : "border-transparent text-gray-400"}
                                cursor-pointer
                                bg-base-100
                                rounded-sm
                                hover:bg-base-200
                                truncate
                                whitespace-nowrap
                            `}
                        >
                            {cl.nomeFantasia}
                        </li>
                    ))}
                </motion.ul>
            );
        }
    }

    return (
        <div ref={refContainer} className="relative flex items-center justify-between">
            <div
                className="flex border-b border-base-200 pl-3 items-center min-h-14 flex-nowrap truncate overflow-y-hidden">
                <label className="font-bold">
                    {cliente && cliente.id ? cliente.nomeFantasia : "Selecione um cliente..."}
                </label>
            </div>
            <div className="btn btn-sm m-1 rounded-sm" onClick={handleShowList}>
                {loading ? <span className="loading loading-spinner loading-sm"></span>
                    : <ListTodo size={15}/>}
            </div>

            <AnimatePresence initial={false}>
                {showList && getClientes()}
            </AnimatePresence>
        </div>
    );
}
