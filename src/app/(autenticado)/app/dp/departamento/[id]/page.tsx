import {ComponenteCadastro} from "@/components/layouts/componente-cadastro/componente-cadastro";

type Props = {
    params: { id: string };
}

export default function DP_CadastroDepartamentos({params}: Props) {
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