import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import {EmpresaService} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa-service";

const empresaService = new EmpresaService();

type Props = {
    empresa: Empresa;
    selecionarEmpresa: (value: Empresa) => void;
    removeCookieEmpresaId: () => void;
}

export const EmpresaContext = createContext<Props>({
    empresa: new Empresa(),
    selecionarEmpresa: () => {},
    removeCookieEmpresaId: () => {}
});

export function useEmpresa() {
    return useContext(EmpresaContext);
}

export function EmpresaContextProvider({ children }: { children: ReactNode }) {

    const [empresa, setEmpresa] = useState<Empresa>(new Empresa());

    useEffect(() => {
        const idEmpresaLocalStorage = localStorage.getItem("empresaId");
        if (idEmpresaLocalStorage) empresaService.buscarPorId(idEmpresaLocalStorage).then(result => setEmpresa(result ? result : new Empresa()))
    }, []);

    function removeCookieEmpresaId() {
        localStorage.removeItem('empresaId');
    }

    function selecionarEmpresa(emp: Empresa) {
        localStorage.setItem('empresaId', emp.id);
        setEmpresa(emp);
    }

    return (
        <EmpresaContext.Provider value={{
            empresa,
            selecionarEmpresa,
            removeCookieEmpresaId
        }}>
            {children}
        </EmpresaContext.Provider>
    )
}