'use client'

import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    nome: Yup.string()
        .required('O nome é obrigatório.')
        .min(2, 'Nome muito curto.'),
    email: Yup.string()
        .email('Digite um email válido.')
        .required('O email é obrigatório.'),
});

export default function FormularioFormik() {
    return (
        <Formik
            initialValues={{ nome: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Formulário enviado!', values);
                // aqui vai o POST pra API, etc.
            }}
        >
            {({ isSubmitting }) => (
                <Form className="max-w-md mx-auto p-4">
                    <div className="mb-4">
                        <label htmlFor="nome" className="block font-bold">
                            Nome
                        </label>
                        <Field
                            id="nome"
                            name="nome"
                            className="w-full border rounded p-2"
                            placeholder="Seu nome completo"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold">
                            Email
                        </label>
                        <Field
                            id="email"
                            name="email"
                            type="email"
                            className="w-full border rounded p-2"
                            placeholder="email@exemplo.com"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>

                    <ErrorMessage
                        name="nome"
                        component="p"
                        className="text-red-600 text-sm"
                    />
                </Form>
            )}
        </Formik>
    );
}
