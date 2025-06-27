'use client'

import {createContext, ReactNode, useContext, useState} from "react";

type Props = {
    somenteLeitura: boolean;
    setSomenteLeitura: (valor: boolean) => void;
}

const FormContext = createContext<Props>({
    somenteLeitura: false,
    setSomenteLeitura: () => {}
})

export const useFormContext = () => {
    return useContext(FormContext);
}

export function FormContextProvider({children}: {children: ReactNode}) {
    const [somenteLeitura, setSomenteLeitura] = useState<boolean>(true)

    return (
        <FormContext.Provider value={{
            somenteLeitura,
            setSomenteLeitura,
        }}>
            {children}
        </FormContext.Provider>
    )
}