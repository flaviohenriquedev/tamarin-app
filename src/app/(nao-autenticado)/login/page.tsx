import {FormularioLogin} from "@/features/_auth/formulario-login";

export default function PaginaLogin() {
    return (
        <div>
            {/* Conteúdo da página */}
            <div className="flex items-start justify-center p-20 relative ">
                <FormularioLogin />
            </div>
        </div>
    );
}
