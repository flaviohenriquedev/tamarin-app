'use client'

import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
    nome: z.string().min(1, 'O nome é obrigatório.'),
    email: z.string().email('Digite um e-mail válido.'),
});

type FormData = z.infer<typeof schema>;

export default function FormularioZod() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log('Dados enviados:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="nome" className="block font-bold">Nome</label>
                <input
                    id="nome"
                    {...register('nome')}
                    className="w-full border rounded p-2"
                />

                {errors.nome && <p className="text-red-600">{errors.nome.message}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block font-bold">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full border rounded p-2"
                />
            </div>

            <button type="submit" className="bg-primary text-white p-2 rounded">
                Enviar
            </button>

        </form>
    );
}
