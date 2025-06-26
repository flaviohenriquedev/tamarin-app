'use client'

import {useForm} from 'react-hook-form';

type FormData = {
    nome: string;
    email: string;
};

export default function Formulario() {
    const {register, handleSubmit, formState: {errors},} = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Formulário enviado!', data);
        // aqui pode mandar pra API, etc.
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="nome" className="block font-bold">Nome</label>
                <input
                    id="nome"
                    {...register('nome', {required: 'O nome é obrigatório.'})}
                    className="w-full border rounded p-2"
                />
                {errors.nome && (
                    <p className="text-red-600 text-sm">{errors.nome.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block font-bold">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', {
                        required: 'O email é obrigatório.',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Digite um email válido.',
                        },
                    })}
                    className="w-full border rounded p-2"
                />
                {errors.email && (
                    <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}
            </div>

            <button type="submit" className="bg-primary text-white p-2 rounded">
                Enviar
            </button>
        </form>
    );
}
