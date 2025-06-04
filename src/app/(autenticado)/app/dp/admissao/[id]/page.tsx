'use client'

import {ComponenteCadastro} from "@/components/layouts/componente-cadastro/componente-cadastro";

export default function DP_AdmissaoCadastro({params}: { params: { id: string } }) {

    const isNovo = params.id === 'cadastro';

    if (!isNovo) {
        // Aqui você faria a busca dos dados
        // exemplo: const data = await getColaboradorById(params.id)
    }

    return (
        <ComponenteCadastro>
            <p>{isNovo ? "Criando novo" : `Editando ID: ${params.id}`}</p>
        </ComponenteCadastro>
    );
}
