import {createContext, ReactNode, useEffect, useState} from "react";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import Cookies from "js-cookie";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";

const clienteService = new ClienteService();

type Props = {
    cliente: Cliente;
    setCliente: (value: Cliente) => void;
    removeCookieClientId: () => void;
}

export const ClienteContext = createContext<Props>({
    cliente: new Cliente(),
    setCliente: () => {},
    removeCookieClientId: () => {}
});

export function ClienteContextProvider({ children }: { children: ReactNode }) {

    const [cliente, setCliente] = useState<Cliente>(new Cliente());

    useEffect(() => {
        if (cliente?.id) {
            Cookies.set('cliente_id', cliente.id, { path: '/' });
        }
    }, [cliente]);

    useEffect(() => {
        const cookieClientId = Cookies.get('cliente_id');
        if (cookieClientId) {
            clienteService.buscarPorId(cookieClientId).then(response => {
                if (response && response.id) {
                    setCliente(response);
                }
            })
        }
    }, []);

    function removeCookieClientId() {
        Cookies.remove('cliente_id');
    }

    return (
        <ClienteContext.Provider value={{
            cliente,
            setCliente,
            removeCookieClientId
        }}>
            {children}
        </ClienteContext.Provider>
    )
}