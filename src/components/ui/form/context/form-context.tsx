'use client';

import {createContext, ReactNode, useContext} from 'react';

import {FieldErrors, FieldValues, useForm, UseFormHandleSubmit, UseFormRegister} from 'react-hook-form';

interface FormContextProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T>;
    errors: FieldErrors<T>;
}

const FormContext = createContext<unknown>(undefined);

export function useFormContextCustom<T extends FieldValues>() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContextCustom deve ser usado dentro de um FormContextProvider');
    }
    return context as FormContextProps<T>;
}

export function FormContextProvider<T extends FieldValues>({ children }: {children: ReactNode }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<T>();

    const contextValue: FormContextProps<T> = {
        register,
        handleSubmit,
        errors
    };

    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    );
}
